angular
	.module('U4OssApp', ['ngResource'])
	.directive('u4App', ['GithubService',
		function(GithubService) {
			return {
				scope: {},
				templateUrl: 'js/app.tpl.html',
				restrict: 'E',
				link: function(scope) {
					scope.repos = GithubService.getOrgRepos('Unit4');
				}
			}
		}
	]);