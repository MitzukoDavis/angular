angular.module("MyFirstApp",[])
  .controller("FirstController",function($scope){
  $scope.nombre="Junior";
  $scope.nuevoComentario = {};
  $scope.comentarios=[
    {
      comentario: "Buen Tutorial",
      username: "Mitzuko"
    },
    {
      comentario: "Mal Tutorial",
      username: "Davis"
    }
  ];
  $scope.agregarComentario = function(){
    $scope.comentarios.push($scope.nuevoComentario);
    $scope.nuevoComentario = {};
  }
});
