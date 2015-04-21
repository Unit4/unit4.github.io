angular
	.module('U4OssApp', ['ngResource'])
	.directive('u4App', ['GithubService',
		function(GithubService) {
			return {
				scope: {},
				templateUrl: 'js/app.tpl.html',
				restrict: 'E',
				link: function(scope) {
					GithubService.getOrgRepos('Unit4').then(function(repos) {
						scope.repos = repos;
					});
				}
			};
		}
	]);