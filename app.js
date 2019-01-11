var app = angular.module("FMIApp", ['ngAnimate']);

app.controller('MainController', ['$scope', '$interval', function ($scope, $interval) {
  $scope.today = {
    disc_amt: 5,
    disc: 'off',
    deal: 'Peti-cure Service',
  };
  $scope.logo = {
    image: 'img/FM_Logo.png',
  };

  $scope.service = [
    {
      name: 'Hourly Pass',
      description: 'Includes access to freeplay zone and agility yard',
      price: 5,
      rate: '/hour',
    },
    {
      name: 'Day Camp',
      description: 'Includes access to freeplay zone, agility yard and terrier tunnel',
      price: 35,
      rate: '/day',
    },
    {
      name: 'Weekly Camp',
      description: 'All access pass including two Fluffy Spa services',
      price: 175,
      rate: '/week',
    },
    {
      name: 'Boot Camp',
      description: '45-minute “Rover-Method” obedience training session',
      price: 15,
      rate: '/session',
    }
  ];
  $scope.spa = [
    {
      name: 'Doggy Do',
      description: 'Indulgent deep cleaning treatment, massage and blowdry',
      price: 45,
    },
    {
      name: 'Peti-cure',
      description: 'Trim and buff nails to pawsitively shine',
      price: 30
    },
  ];
  $scope.images = [
    {
      name: 'Doggy Do',
      description: 'Indulgent deep cleaning treatment, massage and blowdry',
      price: 45
    },
    {
      name: 'Peti-cure',
      description: 'Trim and buff nails to pawsitively shine',
      price: 30
    },
  ];
  $scope.vid = {
    video: 'img/Humans_HD_Stock_Video.mp4',
  };
  /*$scope.slides = [
  {
    image: 'img/LTO1.jpg',
    },
  {
    image: 'img/LTO2.jpg',
    },
  {
    image: 'img/LTO3.jpg',
    },
  {
    image: 'img/LTO4.jpg',
    },
        ];*/
}]);
/*app.animation('.fade-animation', ['$animateCss', function ($animateCss) {
  return {
    enter: function (element, done) {
      $animateCss(element, 1, {
        opacity: 0
      }, {
        opacity: 1,
        onComplete: done
      });
    },
    leave: function (element, done) {
      $animateCss(element, 1, {
        opacity: 0,
        onComplete: done
      });
    }
  }
}]);*/