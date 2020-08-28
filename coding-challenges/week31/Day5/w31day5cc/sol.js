class LeagueTable {
    constructor() {
        this.table = new Object();
        this.team1_name = null;
        this.team2_name = null;
    };
    push = (match_string) => {
        let teams = match_string.split(' - ');

        let team1 = teams[0].split(' ');
        let team1_score = team1.pop();
        this.team1_name = team1.join(' ');

        let team2 = teams[1].split(' ');
        let team2_score = team2.shift();
        this.team2_name = team2.join(' ');

        let team1_point = 0;
        let team2_point = 0;

        if (team1_score > team2_score) {
            team1_point = 3;
            team2_point = 0;
        } else if (team1_score < team2_score) {
            team1_point = 0;
            team2_point = 3;
        } else {
            team1_point = 1;
            team2_point = 1;
        };

        if (this.table[this.team1_name]) {
            this.table[this.team1_name] = {score: this.table[this.team1_name].score + parseInt(team1_score), point: this.table[this.team1_name].point + parseInt(team1_point)};
        } else {
            this.table[this.team1_name] = {score: parseInt(team1_score), point: parseInt(team1_point)};
        };

        if (this.table[this.team2_name]) {
            this.table[this.team2_name] = {score: this.table[this.team2_name].score + parseInt(team2_score), point: this.table[this.team2_name].point + parseInt(team2_point)};
        } else {
            this.table[this.team2_name] = {score: parseInt(team2_score), point: parseInt(team2_point)};
        };

        // console.log(this.table);
    };

    get_goals_for = (team) => {
        console.log(this.table[team].score);
    };

    get_points = (team) => {
        if(this.table[team]) console.log(this.table[team].point);
        else console.log(0);
    };

    get_goal_difference = (team) => {
        if (team === this.team1_name) console.log(this.table[this.team1_name].score - this.table[this.team2_name].score)
        else console.log(this.table[this.team2_name].score - this.table[this.team1_name].score)
    };

    get_goals_against = (team) => {
        if (team === this.team1_name) console.log(this.table[this.team2_name].score)
        else console.log(this.table[this.team1_name].score)
    };
};


let lt = new LeagueTable();

lt.push("Man Utd 3 - 0 Liverpool");

lt.get_goals_for("Man Utd") // 3
lt.get_points("Man Utd") // 3
lt.get_points("Liverpool") // 0
lt.get_goal_difference("Liverpool") // -3

lt.push("Liverpool 1 - 1 Man Utd");

lt.get_goals_for("Man Utd") // 4
lt.get_points("Man Utd") // 4
lt.get_points("Liverpool") // 1
lt.get_goals_against("Man Utd") // 1 

lt.get_points("Tottenham") // 0
