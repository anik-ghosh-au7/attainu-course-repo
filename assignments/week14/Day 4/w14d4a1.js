// taken into consideration data upto id: 20

let input_arr = [
    {
      "postId": 1,
      "id": 1,
      "name": "id labore ex et quam laborum",
      "email": "Eliseo@gardner.biz",
      "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
      "postId": 1,
      "id": 2,
      "name": "quo vero reiciendis velit similique earum",
      "email": "Jayne_Kuhic@sydney.com",
      "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    },
    {
      "postId": 1,
      "id": 3,
      "name": "odio adipisci rerum aut animi",
      "email": "Nikita@garfield.biz",
      "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
    },
    {
      "postId": 1,
      "id": 4,
      "name": "alias odio sit",
      "email": "Lew@alysha.tv",
      "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
    },
    {
      "postId": 1,
      "id": 5,
      "name": "vero eaque aliquid doloribus et culpa",
      "email": "Hayden@althea.biz",
      "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
    },
    {
      "postId": 2,
      "id": 6,
      "name": "et fugit eligendi deleniti quidem qui sint nihil autem",
      "email": "Presley.Mueller@myrl.com",
      "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
    },
    {
      "postId": 2,
      "id": 7,
      "name": "repellat consequatur praesentium vel minus molestias voluptatum",
      "email": "Dallas@ole.me",
      "body": "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
    },
    {
      "postId": 2,
      "id": 8,
      "name": "et omnis dolorem",
      "email": "Mallory_Kunze@marie.org",
      "body": "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque"
    },
    {
      "postId": 2,
      "id": 9,
      "name": "provident id voluptas",
      "email": "Meghan_Littel@rene.us",
      "body": "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus"
    },
    {
      "postId": 2,
      "id": 10,
      "name": "eaque et deleniti atque tenetur ut quo ut",
      "email": "Carmen_Keeling@caroline.name",
      "body": "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis"
    },
    {
      "postId": 3,
      "id": 11,
      "name": "fugit labore quia mollitia quas deserunt nostrum sunt",
      "email": "Veronica_Goodwin@timmothy.net",
      "body": "ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea"
    },
    {
      "postId": 3,
      "id": 12,
      "name": "modi ut eos dolores illum nam dolor",
      "email": "Oswald.Vandervort@leanne.org",
      "body": "expedita maiores dignissimos facilis\nipsum est rem est fugit velit sequi\neum odio dolores dolor totam\noccaecati ratione eius rem velit"
    },
    {
      "postId": 3,
      "id": 13,
      "name": "aut inventore non pariatur sit vitae voluptatem sapiente",
      "email": "Kariane@jadyn.tv",
      "body": "fuga eos qui dolor rerum\ninventore corporis exercitationem\ncorporis cupiditate et deserunt recusandae est sed quis culpa\neum maiores corporis et"
    },
    {
      "postId": 3,
      "id": 14,
      "name": "et officiis id praesentium hic aut ipsa dolorem repudiandae",
      "email": "Nathan@solon.io",
      "body": "vel quae voluptas qui exercitationem\nvoluptatibus unde sed\nminima et qui ipsam aspernatur\nexpedita magnam laudantium et et quaerat ut qui dolorum"
    },
    {
      "postId": 3,
      "id": 15,
      "name": "debitis magnam hic odit aut ullam nostrum tenetur",
      "email": "Maynard.Hodkiewicz@roberta.com",
      "body": "nihil ut voluptates blanditiis autem odio dicta rerum\nquisquam saepe et est\nsunt quasi nemo laudantium deserunt\nmolestias tempora quo quia"
    },
    {
      "postId": 4,
      "id": 16,
      "name": "perferendis temporibus delectus optio ea eum ratione dolorum",
      "email": "Christine@ayana.info",
      "body": "iste ut laborum aliquid velit facere itaque\nquo ut soluta dicta voluptate\nerror tempore aut et\nsequi reiciendis dignissimos expedita consequuntur libero sed fugiat facilis"
    },
    {
      "postId": 4,
      "id": 17,
      "name": "eos est animi quis",
      "email": "Preston_Hudson@blaise.tv",
      "body": "consequatur necessitatibus totam sed sit dolorum\nrecusandae quae odio excepturi voluptatum harum voluptas\nquisquam sit ad eveniet delectus\ndoloribus odio qui non labore"
    },
    {
      "postId": 4,
      "id": 18,
      "name": "aut et tenetur ducimus illum aut nulla ab",
      "email": "Vincenza_Klocko@albertha.name",
      "body": "veritatis voluptates necessitatibus maiores corrupti\nneque et exercitationem amet sit et\nullam velit sit magnam laborum\nmagni ut molestias"
    },
    {
      "postId": 4,
      "id": 19,
      "name": "sed impedit rerum quia et et inventore unde officiis",
      "email": "Madelynn.Gorczany@darion.biz",
      "body": "doloribus est illo sed minima aperiam\nut dignissimos accusantium tempore atque et aut molestiae\nmagni ut accusamus voluptatem quos ut voluptates\nquisquam porro sed architecto ut"
    },
    {
      "postId": 4,
      "id": 20,
      "name": "molestias expedita iste aliquid voluptates",
      "email": "Mariana_Orn@preston.org",
      "body": "qui harum consequatur fugiat\net eligendi perferendis at molestiae commodi ducimus\ndoloremque asperiores numquam qui\nut sit dignissimos reprehenderit tempore"
    },
    {
      "postId": 5,
      "id": 21,
      "name": "aliquid rerum mollitia qui a consectetur eum sed",
      "email": "Noemie@marques.me",
      "body": "deleniti aut sed molestias explicabo\ncommodi odio ratione nesciunt\nvoluptate doloremque est\nnam autem error delectus"
    },
    {
      "postId": 5,
      "id": 22,
      "name": "porro repellendus aut tempore quis hic",
      "email": "Khalil@emile.co.uk",
      "body": "qui ipsa animi nostrum praesentium voluptatibus odit\nqui non impedit cum qui nostrum aliquid fuga explicabo\nvoluptatem fugit earum voluptas exercitationem temporibus dignissimos distinctio\nesse inventore reprehenderit quidem ut incidunt nihil necessitatibus rerum"
    },
    {
      "postId": 5,
      "id": 23,
      "name": "quis tempora quidem nihil iste",
      "email": "Sophia@arianna.co.uk",
      "body": "voluptates provident repellendus iusto perspiciatis ex fugiat ut\nut dolor nam aliquid et expedita voluptate\nsunt vitae illo rerum in quos\nvel eligendi enim quae fugiat est"
    },
    {
      "postId": 5,
      "id": 24,
      "name": "in tempore eos beatae est",
      "email": "Jeffery@juwan.us",
      "body": "repudiandae repellat quia\nsequi est dolore explicabo nihil et\net sit et\net praesentium iste atque asperiores tenetur"
    },
    {
      "postId": 5,
      "id": 25,
      "name": "autem ab ea sit alias hic provident sit",
      "email": "Isaias_Kuhic@jarrett.net",
      "body": "sunt aut quae laboriosam sit ut impedit\nadipisci harum laborum totam deleniti voluptas odit rem ea\nnon iure distinctio ut velit doloribus\net non ex"
    },
    {
      "postId": 6,
      "id": 26,
      "name": "in deleniti sunt provident soluta ratione veniam quam praesentium",
      "email": "Russel.Parker@kameron.io",
      "body": "incidunt sapiente eaque dolor eos\nad est molestias\nquas sit et nihil exercitationem at cumque ullam\nnihil magnam et"
    },
    {
      "postId": 6,
      "id": 27,
      "name": "doloribus quibusdam molestiae amet illum",
      "email": "Francesco.Gleason@nella.us",
      "body": "nisi vel quas ut laborum ratione\nrerum magni eum\nunde et voluptatem saepe\nvoluptas corporis modi amet ipsam eos saepe porro"
    },
    {
      "postId": 6,
      "id": 28,
      "name": "quo voluptates voluptas nisi veritatis dignissimos dolores ut officiis",
      "email": "Ronny@rosina.org",
      "body": "voluptatem repellendus quo alias at laudantium\nmollitia quidem esse\ntemporibus consequuntur vitae rerum illum\nid corporis sit id"
    },
    {
      "postId": 6,
      "id": 29,
      "name": "eum distinctio amet dolor",
      "email": "Jennings_Pouros@erica.biz",
      "body": "tempora voluptatem est\nmagnam distinctio autem est dolorem\net ipsa molestiae odit rerum itaque corporis nihil nam\neaque rerum error"
    },
    {
      "postId": 6,
      "id": 30,
      "name": "quasi nulla ducimus facilis non voluptas aut",
      "email": "Lurline@marvin.biz",
      "body": "consequuntur quia voluptate assumenda et\nautem voluptatem reiciendis ipsum animi est provident\nearum aperiam sapiente ad vitae iste\naccusantium aperiam eius qui dolore voluptatem et"
    },
    {
      "postId": 7,
      "id": 31,
      "name": "ex velit ut cum eius odio ad placeat",
      "email": "Buford@shaylee.biz",
      "body": "quia incidunt ut\naliquid est ut rerum deleniti iure est\nipsum quia ea sint et\nvoluptatem quaerat eaque repudiandae eveniet aut"
    },
    {
      "postId": 7,
      "id": 32,
      "name": "dolorem architecto ut pariatur quae qui suscipit",
      "email": "Maria@laurel.name",
      "body": "nihil ea itaque libero illo\nofficiis quo quo dicta inventore consequatur voluptas voluptatem\ncorporis sed necessitatibus velit tempore\nrerum velit et temporibus"
    },
    {
      "postId": 7,
      "id": 33,
      "name": "voluptatum totam vel voluptate omnis",
      "email": "Jaeden.Towne@arlene.tv",
      "body": "fugit harum quae vero\nlibero unde tempore\nsoluta eaque culpa sequi quibusdam nulla id\net et necessitatibus"
    },
    {
      "postId": 7,
      "id": 34,
      "name": "omnis nemo sunt ab autem",
      "email": "Ethelyn.Schneider@emelia.co.uk",
      "body": "omnis temporibus quasi ab omnis\nfacilis et omnis illum quae quasi aut\nminus iure ex rem ut reprehenderit\nin non fugit"
    },
    {
      "postId": 7,
      "id": 35,
      "name": "repellendus sapiente omnis praesentium aliquam ipsum id molestiae omnis",
      "email": "Georgianna@florence.io",
      "body": "dolor mollitia quidem facere et\nvel est ut\nut repudiandae est quidem dolorem sed atque\nrem quia aut adipisci sunt"
    },
    {
      "postId": 8,
      "id": 36,
      "name": "sit et quis",
      "email": "Raheem_Heaney@gretchen.biz",
      "body": "aut vero est\ndolor non aut excepturi dignissimos illo nisi aut quas\naut magni quia nostrum provident magnam quas modi maxime\nvoluptatem et molestiae"
    },
    {
      "postId": 8,
      "id": 37,
      "name": "beatae veniam nemo rerum voluptate quam aspernatur",
      "email": "Jacky@victoria.net",
      "body": "qui rem amet aut\ncumque maiores earum ut quia sit nam esse qui\niusto aspernatur quis voluptas\ndolorem distinctio ex temporibus rem"
    },
    {
      "postId": 8,
      "id": 38,
      "name": "maiores dolores expedita",
      "email": "Piper@linwood.us",
      "body": "unde voluptatem qui dicta\nvel ad aut eos error consequatur voluptatem\nadipisci doloribus qui est sit aut\nvelit aut et ea ratione eveniet iure fuga"
    },
    {
      "postId": 8,
      "id": 39,
      "name": "necessitatibus ratione aut ut delectus quae ut",
      "email": "Gaylord@russell.net",
      "body": "atque consequatur dolorem sunt\nadipisci autem et\nvoluptatibus et quae necessitatibus rerum eaque aperiam nostrum nemo\neligendi sed et beatae et inventore"
    },
    {
      "postId": 8,
      "id": 40,
      "name": "non minima omnis deleniti pariatur facere quibusdam at",
      "email": "Clare.Aufderhar@nicole.ca",
      "body": "quod minus alias quos\nperferendis labore molestias quae ut ut corporis deserunt vitae\net quaerat ut et ullam unde asperiores\ncum voluptatem cumque"
    },
    {
      "postId": 9,
      "id": 41,
      "name": "voluptas deleniti ut",
      "email": "Lucio@gladys.tv",
      "body": "facere repudiandae vitae ea aut sed quo ut et\nfacere nihil ut voluptates in\nsaepe cupiditate accusantium numquam dolores\ninventore sint mollitia provident"
    },
    {
      "postId": 9,
      "id": 42,
      "name": "nam qui et",
      "email": "Shemar@ewell.name",
      "body": "aut culpa quaerat veritatis eos debitis\naut repellat eius explicabo et\nofficiis quo sint at magni ratione et iure\nincidunt quo sequi quia dolorum beatae qui"
    },
    {
      "postId": 9,
      "id": 43,
      "name": "molestias sint est voluptatem modi",
      "email": "Jackeline@eva.tv",
      "body": "voluptatem ut possimus laborum quae ut commodi delectus\nin et consequatur\nin voluptas beatae molestiae\nest rerum laborum et et velit sint ipsum dolorem"
    },
    {
      "postId": 9,
      "id": 44,
      "name": "hic molestiae et fuga ea maxime quod",
      "email": "Marianna_Wilkinson@rupert.io",
      "body": "qui sunt commodi\nsint vel optio vitae quis qui non distinctio\nid quasi modi dicta\neos nihil sit inventore est numquam officiis"
    },
    {
      "postId": 9,
      "id": 45,
      "name": "autem illo facilis",
      "email": "Marcia@name.biz",
      "body": "ipsum odio harum voluptatem sunt cumque et dolores\nnihil laboriosam neque commodi qui est\nquos numquam voluptatum\ncorporis quo in vitae similique cumque tempore"
    },
    {
      "postId": 10,
      "id": 46,
      "name": "dignissimos et deleniti voluptate et quod",
      "email": "Jeremy.Harann@waino.me",
      "body": "exercitationem et id quae cum omnis\nvoluptatibus accusantium et quidem\nut ipsam sint\ndoloremque illo ex atque necessitatibus sed"
    },
    {
      "postId": 10,
      "id": 47,
      "name": "rerum commodi est non dolor nesciunt ut",
      "email": "Pearlie.Kling@sandy.com",
      "body": "occaecati laudantium ratione non cumque\nearum quod non enim soluta nisi velit similique voluptatibus\nesse laudantium consequatur voluptatem rem eaque voluptatem aut ut\net sit quam"
    },
    {
      "postId": 10,
      "id": 48,
      "name": "consequatur animi dolorem saepe repellendus ut quo aut tenetur",
      "email": "Manuela_Stehr@chelsie.tv",
      "body": "illum et alias quidem magni voluptatum\nab soluta ea qui saepe corrupti hic et\ncum repellat esse\nest sint vel veritatis officia consequuntur cum"
    },
    {
      "postId": 10,
      "id": 49,
      "name": "rerum placeat quae minus iusto eligendi",
      "email": "Camryn.Weimann@doris.io",
      "body": "id est iure occaecati quam similique enim\nab repudiandae non\nillum expedita quam excepturi soluta qui placeat\nperspiciatis optio maiores non doloremque aut iusto sapiente"
    },
    {
      "postId": 10,
      "id": 50,
      "name": "dolorum soluta quidem ex quae occaecati dicta aut doloribus",
      "email": "Kiana_Predovic@yasmin.io",
      "body": "eum accusamus aut delectus\narchitecto blanditiis quia sunt\nrerum harum sit quos quia aspernatur vel corrupti inventore\nanimi dicta vel corporis"
    },
    {
      "postId": 11,
      "id": 51,
      "name": "molestias et odio ut commodi omnis ex",
      "email": "Laurie@lincoln.us",
      "body": "perferendis omnis esse\nvoluptate sit mollitia sed perferendis\nnemo nostrum qui\nvel quis nisi doloribus animi odio id quas"
    },
    {
      "postId": 11,
      "id": 52,
      "name": "esse autem dolorum",
      "email": "Abigail.OConnell@june.org",
      "body": "et enim voluptatem totam laudantium\nimpedit nam labore repellendus enim earum aut\nconsectetur mollitia fugit qui repellat expedita sunt\naut fugiat vel illo quos aspernatur ducimus"
    },
    {
      "postId": 11,
      "id": 53,
      "name": "maiores alias necessitatibus aut non",
      "email": "Laverne_Price@scotty.info",
      "body": "a at tempore\nmolestiae odit qui dolores molestias dolorem et\nlaboriosam repudiandae placeat quisquam\nautem aperiam consectetur maiores laboriosam nostrum"
    },
    {
      "postId": 11,
      "id": 54,
      "name": "culpa eius tempora sit consequatur neque iure deserunt",
      "email": "Kenton_Vandervort@friedrich.com",
      "body": "et ipsa rem ullam cum pariatur similique quia\ncum ipsam est sed aut inventore\nprovident sequi commodi enim inventore assumenda aut aut\ntempora possimus soluta quia consequatur modi illo"
    },
    {
      "postId": 11,
      "id": 55,
      "name": "quas pariatur quia a doloribus",
      "email": "Hayden_Olson@marianna.me",
      "body": "perferendis eaque labore laudantium ut molestiae soluta et\nvero odio non corrupti error pariatur consectetur et\nenim nam quia voluptatum non\nmollitia culpa facere voluptas suscipit veniam"
    },
    {
      "postId": 12,
      "id": 56,
      "name": "et dolorem corrupti sed molestias",
      "email": "Vince_Crist@heidi.biz",
      "body": "cum esse odio nihil reiciendis illum quaerat\nest facere quia\noccaecati sit totam fugiat in beatae\nut occaecati unde vitae nihil quidem consequatur"
    },
    {
      "postId": 12,
      "id": 57,
      "name": "qui quidem sed",
      "email": "Darron.Nikolaus@eulah.me",
      "body": "dolorem facere itaque fuga odit autem\nperferendis quisquam quis corrupti eius dicta\nrepudiandae error esse itaque aut\ncorrupti sint consequatur aliquid"
    },
    {
      "postId": 12,
      "id": 58,
      "name": "sint minus reiciendis qui perspiciatis id",
      "email": "Ezra_Abshire@lyda.us",
      "body": "veritatis qui nihil\nquia reprehenderit non ullam ea iusto\nconsectetur nam voluptas ut temporibus tempore provident error\neos et nisi et voluptate"
    },
    {
      "postId": 12,
      "id": 59,
      "name": "quis ducimus distinctio similique et illum minima ab libero",
      "email": "Jameson@tony.info",
      "body": "cumque molestiae officia aut fugiat nemo autem\nvero alias atque sed qui ratione quia\nrepellat vel earum\nea laudantium mollitia"
    },
    {
      "postId": 12,
      "id": 60,
      "name": "expedita libero quos cum commodi ad",
      "email": "Americo@estrella.net",
      "body": "error eum quia voluptates alias repudiandae\naccusantium veritatis maiores assumenda\nquod impedit animi tempore veritatis\nanimi et et officiis labore impedit blanditiis repudiandae"
    },
    {
      "postId": 13,
      "id": 61,
      "name": "quidem itaque dolores quod laborum aliquid molestiae",
      "email": "Aurelio.Pfeffer@griffin.ca",
      "body": "deserunt cumque laudantium\net et odit quia sint quia quidem\nquibusdam debitis fuga in tempora deleniti\nimpedit consequatur veniam reiciendis autem porro minima"
    },
    {
      "postId": 13,
      "id": 62,
      "name": "libero beatae consequuntur optio est hic",
      "email": "Vesta_Crooks@dora.us",
      "body": "tempore dolorum corrupti facilis\npraesentium sunt iste recusandae\nunde quisquam similique\nalias consequuntur voluptates velit"
    },
    {
      "postId": 13,
      "id": 63,
      "name": "occaecati dolor accusantium et quasi architecto aut eveniet fugiat",
      "email": "Margarett_Klein@mike.biz",
      "body": "aut eligendi et molestiae voluptatum tempora\nofficia nihil sit voluptatem aut deleniti\nquaerat consequatur eaque\nsapiente tempore commodi tenetur rerum qui quo"
    },
    {
      "postId": 13,
      "id": 64,
      "name": "consequatur aut ullam voluptas dolorum voluptatum sequi et",
      "email": "Freida@brandt.tv",
      "body": "sed illum quis\nut aut culpa labore aspernatur illo\ndolorem quia vitae ut aut quo repellendus est omnis\nesse at est debitis"
    },
    {
      "postId": 13,
      "id": 65,
      "name": "earum ea ratione numquam",
      "email": "Mollie@agustina.name",
      "body": "qui debitis vitae ratione\ntempora impedit aperiam porro molestiae placeat vero laboriosam recusandae\npraesentium consequatur facere et itaque quidem eveniet\nmagnam natus distinctio sapiente"
    },
    {
      "postId": 14,
      "id": 66,
      "name": "eius nam consequuntur",
      "email": "Janice@alda.io",
      "body": "necessitatibus libero occaecati\nvero inventore iste assumenda veritatis\nasperiores non sit et quia omnis facere nemo explicabo\nodit quo nobis porro"
    },
    {
      "postId": 14,
      "id": 67,
      "name": "omnis consequatur natus distinctio",
      "email": "Dashawn@garry.com",
      "body": "nulla quo itaque beatae ad\nofficiis animi aut exercitationem voluptatum dolorem doloremque ducimus in\nrecusandae officia consequuntur quas\naspernatur dolores est esse dolores sit illo laboriosam quaerat"
    },
    {
      "postId": 14,
      "id": 68,
      "name": "architecto ut deserunt consequatur cumque sapiente",
      "email": "Devan.Nader@ettie.me",
      "body": "sed magni accusantium numquam quidem omnis et voluptatem beatae\nquos fugit libero\nvel ipsa et nihil recusandae ea\niste nemo qui optio sit enim ut nostrum odit"
    },
    {
      "postId": 14,
      "id": 69,
      "name": "at aut ea iure accusantium voluptatum nihil ipsum",
      "email": "Joana.Schoen@leora.co.uk",
      "body": "omnis dolor autem qui est natus\nautem animi nemo voluptatum aut natus accusantium iure\ninventore sunt ea tenetur commodi suscipit facere architecto consequatur\ndolorem nihil veritatis consequuntur corporis"
    },
    {
      "postId": 14,
      "id": 70,
      "name": "eum magni accusantium labore aut cum et tenetur",
      "email": "Minerva.Anderson@devonte.ca",
      "body": "omnis aliquam praesentium ad voluptatem harum aperiam dolor autem\nhic asperiores quisquam ipsa necessitatibus suscipit\npraesentium rem deserunt et\nfacere repellendus aut sed fugit qui est"
    },
    {
      "postId": 15,
      "id": 71,
      "name": "vel pariatur perferendis vero ab aut voluptates labore",
      "email": "Lavinia@lafayette.me",
      "body": "mollitia magnam et\nipsum consequatur est expedita\naut rem ut ex doloremque est vitae est\ncumque velit recusandae numquam libero dolor fuga fugit a"
    },
    {
      "postId": 15,
      "id": 72,
      "name": "quia sunt dolor dolor suscipit expedita quis",
      "email": "Sabrina.Marks@savanah.name",
      "body": "quisquam voluptas ut\npariatur eos amet non\nreprehenderit voluptates numquam\nin est voluptatem dicta ipsa qui esse enim"
    },
    {
      "postId": 15,
      "id": 73,
      "name": "ut quia ipsa repellat sunt et sequi aut est",
      "email": "Desmond_Graham@kailee.biz",
      "body": "nam qui possimus deserunt\ninventore dignissimos nihil rerum ut consequatur vel architecto\ntenetur recusandae voluptate\nnumquam dignissimos aliquid ut reprehenderit voluptatibus"
    },
    {
      "postId": 15,
      "id": 74,
      "name": "ut non illum pariatur dolor",
      "email": "Gussie_Kunde@sharon.biz",
      "body": "non accusamus eum aut et est\naccusantium animi nesciunt distinctio ea quas quisquam\nsit ut voluptatem modi natus sint\nfacilis est qui molestias recusandae nemo"
    },
    {
      "postId": 15,
      "id": 75,
      "name": "minus laboriosam consequuntur",
      "email": "Richard@chelsie.co.uk",
      "body": "natus numquam enim asperiores doloremque ullam et\nest molestias doloribus cupiditate labore vitae aut voluptatem\nitaque quos quo consectetur nihil illum veniam\nnostrum voluptatum repudiandae ut"
    },
    {
      "postId": 16,
      "id": 76,
      "name": "porro ut soluta repellendus similique",
      "email": "Gage_Turner@halle.name",
      "body": "sunt qui consequatur similique recusandae repellendus voluptates eos et\nvero nostrum fugit magnam aliquam\nreprehenderit nobis voluptatem eos consectetur possimus\net perferendis qui ea fugiat sit doloremque"
    },
    {
      "postId": 16,
      "id": 77,
      "name": "dolores et quo omnis voluptates",
      "email": "Alfred@sadye.biz",
      "body": "eos ullam dolorem impedit labore mollitia\nrerum non dolores\nmolestiae dignissimos qui maxime sed voluptate consequatur\ndoloremque praesentium magnam odio iste quae totam aut"
    },
    {
      "postId": 16,
      "id": 78,
      "name": "voluptas voluptas voluptatibus blanditiis",
      "email": "Catharine@jordyn.com",
      "body": "qui adipisci eveniet excepturi iusto magni et\nenim ducimus asperiores blanditiis nemo\ncommodi nihil ex\nenim rerum vel nobis nostrum et non"
    },
    {
      "postId": 16,
      "id": 79,
      "name": "beatae ut ad quisquam sed repellendus et",
      "email": "Esther_Ratke@shayna.biz",
      "body": "et inventore sapiente sed\nsunt similique fugiat officia velit doloremque illo eligendi quas\nsed rerum in quidem perferendis facere molestias\ndolore dolor voluptas nam vel quia"
    },
    {
      "postId": 16,
      "id": 80,
      "name": "et cumque ad culpa ut eligendi non",
      "email": "Evangeline@chad.net",
      "body": "dignissimos itaque ab et tempore odio omnis voluptatem\nitaque perferendis rem repellendus tenetur nesciunt velit\nqui cupiditate recusandae\nquis debitis dolores aliquam nam"
    },
    {
      "postId": 17,
      "id": 81,
      "name": "aut non consequuntur dignissimos voluptatibus dolorem earum recusandae dolorem",
      "email": "Newton.Kertzmann@anjali.io",
      "body": "illum et voluptatem quis repellendus quidem repellat\nreprehenderit voluptas consequatur mollitia\npraesentium nisi quo quod et\noccaecati repellendus illo eius harum explicabo doloribus officia"
    },
    {
      "postId": 17,
      "id": 82,
      "name": "ea est non dolorum iste nihil est",
      "email": "Caleb_Herzog@rosamond.net",
      "body": "officiis dolorem voluptas aliquid eveniet tempora qui\nea temporibus labore accusamus sint\nut sunt necessitatibus voluptatum animi cumque\nat reiciendis voluptatem iure aliquid et qui dolores et"
    },
    {
      "postId": 17,
      "id": 83,
      "name": "nihil qui accusamus ratione et molestias et minus",
      "email": "Sage_Mueller@candace.net",
      "body": "et consequatur voluptates magnam fugit sunt repellendus nihil earum\nofficiis aut cupiditate\net distinctio laboriosam\nmolestiae sunt dolor explicabo recusandae"
    },
    {
      "postId": 17,
      "id": 84,
      "name": "quia voluptatibus magnam voluptatem optio vel perspiciatis",
      "email": "Bernie.Bergnaum@lue.com",
      "body": "ratione ut magni voluptas\nexplicabo natus quia consequatur nostrum aut\nomnis enim in qui illum\naut atque laboriosam aliquid blanditiis quisquam et laborum"
    },
    {
      "postId": 17,
      "id": 85,
      "name": "non voluptas cum est quis aut consectetur nam",
      "email": "Alexzander_Davis@eduardo.name",
      "body": "quisquam incidunt dolores sint qui doloribus provident\nvel cupiditate deleniti alias voluptatem placeat ad\nut dolorem illum unde iure quis libero neque\nea et distinctio id"
    },
    {
      "postId": 18,
      "id": 86,
      "name": "suscipit est sunt vel illum sint",
      "email": "Jacquelyn@krista.info",
      "body": "eum culpa debitis sint\neaque quia magni laudantium qui neque voluptas\nvoluptatem qui molestiae vel earum est ratione excepturi\nsit aut explicabo et repudiandae ut perspiciatis"
    },
    {
      "postId": 18,
      "id": 87,
      "name": "dolor asperiores autem et omnis quasi nobis",
      "email": "Grover_Volkman@coty.tv",
      "body": "assumenda corporis architecto repudiandae omnis qui et odit\nperferendis velit enim\net quia reiciendis sint\nquia voluptas quam deserunt facilis harum eligendi"
    },
    {
      "postId": 18,
      "id": 88,
      "name": "officiis aperiam odit sint est non",
      "email": "Jovanny@abigale.ca",
      "body": "laudantium corrupti atque exercitationem quae enim et veniam dicta\nautem perspiciatis sit dolores\nminima consectetur tenetur iste facere\namet est neque"
    },
    {
      "postId": 18,
      "id": 89,
      "name": "in voluptatum nostrum voluptas iure nisi rerum est placeat",
      "email": "Isac_Schmeler@barton.com",
      "body": "quibusdam rerum quia nostrum culpa\nculpa est natus impedit quo rem voluptate quos\nrerum culpa aut ut consectetur\nsunt esse laudantium voluptatibus cupiditate rerum"
    },
    {
      "postId": 18,
      "id": 90,
      "name": "eum voluptas dolores molestias odio amet repellendus",
      "email": "Sandy.Erdman@sabina.info",
      "body": "vitae cupiditate excepturi eum veniam laudantium aspernatur blanditiis\naspernatur quia ut assumenda et magni enim magnam\nin voluptate tempora\nnon qui voluptatem reprehenderit porro qui voluptatibus"
    },
    {
      "postId": 19,
      "id": 91,
      "name": "repellendus est laboriosam voluptas veritatis",
      "email": "Alexandro@garry.io",
      "body": "qui nisi at maxime deleniti quo\nex quas tenetur nam\ndeleniti aut asperiores deserunt cum ex eaque alias sit\net veniam ab consequatur molestiae"
    },
    {
      "postId": 19,
      "id": 92,
      "name": "repellendus aspernatur occaecati tempore blanditiis deleniti omnis qui distinctio",
      "email": "Vickie_Schuster@harley.net",
      "body": "nihil necessitatibus omnis asperiores nobis praesentium quia\nab debitis quo deleniti aut sequi commodi\nut perspiciatis quod est magnam aliquam modi\neum quos aliquid ea est"
    },
    {
      "postId": 19,
      "id": 93,
      "name": "mollitia dolor deleniti sed iure laudantium",
      "email": "Roma_Doyle@alia.com",
      "body": "ut quis et id repellat labore\nnobis itaque quae saepe est ullam aut\ndolor id ut quis\nsunt iure voluptates expedita voluptas doloribus modi saepe autem"
    },
    {
      "postId": 19,
      "id": 94,
      "name": "vero repudiandae voluptatem nobis",
      "email": "Tatum_Marks@jaylon.name",
      "body": "reiciendis delectus nulla quae voluptas nihil provident quia\nab corporis nesciunt blanditiis quibusdam et unde et\nmagni eligendi aperiam corrupti perspiciatis quasi\nneque iure voluptatibus mollitia"
    },
    {
      "postId": 19,
      "id": 95,
      "name": "voluptatem unde quos provident ad qui sit et excepturi",
      "email": "Juston.Ruecker@scot.tv",
      "body": "at ut tenetur rem\nut fuga quis ea magnam alias\naut tempore fugiat laboriosam porro quia iure qui\narchitecto est enim"
    },
    {
      "postId": 20,
      "id": 96,
      "name": "non sit ad culpa quis",
      "email": "River.Grady@lavada.biz",
      "body": "eum itaque quam\nlaboriosam sequi ullam quos nobis\nomnis dignissimos nam dolores\nfacere id suscipit aliquid culpa rerum quis"
    },
    {
      "postId": 20,
      "id": 97,
      "name": "reiciendis culpa omnis suscipit est",
      "email": "Claudia@emilia.ca",
      "body": "est ducimus voluptate saepe iusto repudiandae recusandae et\nsint fugit voluptas eum itaque\nodit ab eos voluptas molestiae necessitatibus earum possimus voluptatem\nquibusdam aut illo beatae qui delectus aut officia veritatis"
    },
    {
      "postId": 20,
      "id": 98,
      "name": "praesentium dolorem ea voluptate et",
      "email": "Torrey@june.tv",
      "body": "ex et expedita cum voluptatem\nvoluptatem ab expedita quis nihil\nesse quo nihil perferendis dolores velit ut culpa aut\ndolor maxime necessitatibus voluptatem"
    },
    {
      "postId": 20,
      "id": 99,
      "name": "laudantium delectus nam",
      "email": "Hildegard.Aufderhar@howard.com",
      "body": "aut quam consequatur sit et\nrepellat maiores laborum similique voluptatem necessitatibus nihil\net debitis nemo occaecati cupiditate\nmodi dolorum quia aut"
    },
    {
      "postId": 20,
      "id": 100,
      "name": "et sint quia dolor et est ea nulla cum",
      "email": "Leone_Fay@orrin.com",
      "body": "architecto dolorem ab explicabo et provident et\net eos illo omnis mollitia ex aliquam\natque ut ipsum nulla nihil\nquis voluptas aut debitis facilis"}
    ];

let new_arr = [];

input_arr.forEach(element => {
    new_arr.push({"id": element.id, "name": element.name});
});

let filtered_arr = input_arr.filter(elem => elem.body.length <= 50);

console.log(new_arr);
console.log(filtered_arr);

ids = new Set(input_arr.map(elem => elem.postId));
// console.log(ids);

for (let id of ids){
    let result = input_arr.filter(elem => elem.postId === id).length;
    console.log(`Number of posts of postId ${id} is ${result}`);
};
