$( "#target" ).submit(function( event ) {
    event.preventDefault();
    let form_data = new FormData(this);
    window.localStorage.setItem('username', form_data.get('username'));
    window.localStorage.setItem('password', form_data.get('password'));
    if(window.localStorage.getItem('username') === 'robin' && window.localStorage.getItem('password') === 'Robin@123') {
        console.log('in if')
        window.open('dashboard.html');
    } else {
        console.log('in else')
        location.reload();
    };
  });