var ajax = new XMLHttpRequest();

ajax.open ("GET", "https://doinmotors.free.beeceptor.com/carros/1");

ajax.send();

ajax.onreadystatechange = () => {
    if(ajax.readyState === 4 && ajax.status === 200) {
        console.log('sucesso');
    }
}