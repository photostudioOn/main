(function(){


    var data = {
        
        name: 'AIGERIM',
        plainText:"Some text about me. I love taking photos of PEOPLE. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
    var photos = {
        zero: 'images/0.jpg',
        first: 'images/1.jpg',
        second: 'images/2.jpg',
        third: 'images/3.jpg',
        fourth: 'images/4.jpg',
        fifth: 'images/5.jpg',
        six: 'images/6.jpg',
        seven: 'images/7.jpg',
        eight: 'images/8.jpg',
        nine:'images/9.jpg',
        ten:'images/10.jpg'
    }

    
    var textAigerim = document.getElementById('aigerim');
    var plainText = document.getElementById('plain-text');

    var images = document.getElementsByClassName('pic1');
    var photAboutMe = document.getElementById('photoAboutMe');


    
    // setting Up photos
    images[0].src = photos.zero;
    images[1].src=photos.first;
    images[2].src=photos.second;
    images[3].src=photos.third;
    images[4].src=photos.fourth;
    images[5].src=photos.fifth;
    images[6].src=photos.zero;
    images[7].src=photos.first;
    images[8].src=photos.second;
    photAboutMe.src = photos.zero;
    
    
    

    
})();