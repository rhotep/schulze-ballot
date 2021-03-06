var schulzeDoodleControllers = angular.module('schulzeDoodleControllers', []);
 

schulzeDoodleControllers.controller(

	'BallotBoxCtrl', 
	[
		'$scope', 
		'$routeParams',
		function ($scope, $routeParams) {
			$scope.box_id		=	$routeParams.box_id
			$scope.ballot_box	=	{
										options	:	[],
										papers	:	[]
									}

			//dummy:
			$scope.ballot_box	=	{
							            id      :   1,
							            subject :   "example subject",
							            options :   [
							            				{
								            				tag		:	"A",
								                            title   :   "That government department",
								                            details :   "Beschreibung"
								                        }, 
								                        {
								            				tag		:	"B",
								                            title   :   "Titel B",
								                            details :   "Beschreibung"
								                        }, 
								                        {
								            				tag		:	"C",
								                            title   :   "Titel C",
								                            details :   "Beschreibung"
								                        }, 
								                        {
								            				tag		:	"D",
								                            title   :   "Titel D",
								                            details :   "Beschreibung"
								                        }, 
								                        {
								            				tag		:	"E",
								                            title   :   "Titel E",
								                            details :   "Beschreibung"
								                        }, 
								                        {
								            				tag		:	"F",
								                            title   :   "Titel F",
								                            details :   "Beschreibung"
								                        }
													], 
							            papers  :   [
														{
							                                id          :   1,
							                                participant :   "user1",
							                                ranking     :   [["A"], ["B", "C"], ["D", "E", "F"]]
							                            },
							                            {
							                                id          :   2,
							                                participant :   "user2",
							                                ranking     :   [["B"], ["C", "A"], ["D"], ["E", "F"]]
							                            },
							                            {
							                                id          :   3,
							                                participant :   "user2",
							                                ranking     :   [["B"], ["C", "A"], ["D"], ["E", "F"]]
							                            },
							                            {
							                                id          :   4,
							                                participant :   "user2",
							                                ranking     :   [["B"], ["C", "A"], ["D"], ["E", "F"]]
							                            },
							                            {
							                                id          :   5,
							                                participant :   "user2",
							                                ranking     :   [["B"], ["C", "A"], ["D"], ["E", "F"]]
							                            },
							                            {
							                                id          :   6,
							                                participant :   "user2",
							                                ranking     :   [["B"], ["C", "A"], ["D"], ["E", "F"]]
							                            },
							                            {
							                                id          :   7,
							                                participant :   "user2",
							                                ranking     :   [["B"], ["C", "A"], ["D"], ["E", "F"]]
							                            }
							                        ]
									}
								

			$scope.ballot_box.options	= _property2key($scope.ballot_box.options, 'tag')
			$scope.ballot_box.papers	= _property2key($scope.ballot_box.papers, 'id')

		    $scope.addBallotPaper = function(id) {
		    	var ballot_paper = {
		    							id			:	id !== undefined ? id : Math.floor(Math.random()*100),
										participant :   "unnamed",
										ranking     :   [Object.keys($scope.ballot_box.options)]
		    						}
		        $scope.ballot_box.papers[ballot_paper.id] = ballot_paper
		    }

			$scope.removeBallotPaper = function(paper_id) {
		        if($scope.ballot_box.papers[paper_id]) delete $scope.ballot_box.papers[paper_id]
		    }

		    $scope.getSchulzeRanking = function(box_id) {
		        return ["A", ["C", "D"], ["B", "E", "F"]]
		    } 

		    $scope.addBallotPaper("")
		   
		}
	]
)



