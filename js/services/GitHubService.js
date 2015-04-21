angular
	.module('U4OssApp')
	.service('GithubService', ['$resource',
		function($resource) {
			var organizations = $resource('http://api.github.com/orgs/:org', {
				org: '@org'
			}, {
				repos: {
					method: 'GET',
					url: 'http://api.github.com/orgs/:org/repos',
					isArray: true
				}
			})

			this.getOrgRepos = function(name) {
				return organizations.repos({
					org: name
				});
			};
		}
	]);