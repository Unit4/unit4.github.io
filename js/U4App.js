angular
	.module('U4OssApp', ['ngResource'])
	.directive('u4App', ['GithubService',
		function(GithubService) {
			return {
				scope: {},
				templateUrl: 'js/app.tpl.html',
				restrict: 'E',
				link: function(scope) {
					GithubService.getOrgInfo('Unit4').then(function(org) {
						scope.org = org;
					});

					GithubService.getOrgPublicMembers('Unit4').then(function(members) {
						scope.publicMembers = members;
					});

					GithubService.getOrgRepos('Unit4').then(function(repos) {
						scope.repos = repos;
					});
				}
			};
		}
	]);
