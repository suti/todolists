/**
 * Created by suti on 16/5/26.
 */
angular.module('todolist',['ngStorage'])
    .controller('list',function ($scope,$localStorage) {
        $scope.inc="";
        $scope.outs=[];
        $scope.type="undo";
        $scope.$storage=$localStorage.$default({
            todolist:{
                content:[],
                type:[]
            }
        });
        $scope.add=function () {
            var i = new Array();
            i[0]=$scope.inc;
            i[1]=$scope.type;
            // $scope.ins.push(i);
            $scope.$storage.todolist.content.push(i[0]);
            $scope.$storage.todolist.type.push(i[1]);
            loadlist();
        };
        $scope.settype=function (i) {
            if($scope.outs[i][1]!="undo"){
                $scope.$storage.todolist.type[i]="undo";
                $scope.outs[i][1]="undo";
            }else{
                $scope.outs[i][1]="done";
                $scope.$storage.todolist.type[i]="done";
            }
        }
        $scope.del=function (i,$event) {
            $scope.$storage.todolist.content.splice(i,1);
            $scope.$storage.todolist.type.splice(i,1);
            loadlist();
            $event.stopPropagation();
        }
        window.onload=function () {
            loadlist();
        }
        $scope.loadlist=function () {
            loadlist();
        };
        var loadlist=function () {
            var t = new Array();
            $scope.outs=[];
            for(var i=0;i<$scope.$storage.todolist.content.length;i++){
                t[i]=new Array();
                t[i][0]=$scope.$storage.todolist.content[i];
                t[i][1]=$scope.$storage.todolist.type[i];
            }
            for(var i=0;i<t.length;i++){
                $scope.outs.push(t[i]);
            }
        }
    });