angular
	.module('U4OssApp')
	.service('GithubService', ['$resource',
		function($resource) {
			var organizations = $resource('//api.github.com/orgs/:org', {
				org: '@org',
				callback: 'JSON_CALLBACK'
			}, {
				info: {
					method: 'JSONP',
					url: 'https://api.github.com/orgs/:org',
					headers: {
						'Accept': 'application/vnd.github.v3+json'
					}
				},
				publicMembers: {
					method: 'JSONP',
					url: 'https://api.github.com/orgs/:org/public_members',
					headers: {
						'Accept': 'application/vnd.github.v3+json'
					}
				},
				repos: {
					method: 'JSONP',
					url: 'https://api.github.com/orgs/:org/repos',
					headers: {
						'Accept': 'application/vnd.github.v3+json'
					}
				}
			});

			this.getOrgInfo = function(name) {
				return organizations.info({
					org: name
				}).$promise.then(function(response) {
					return response.data;
				}).catch(function(e){
					console.log(e);
					return [];
				});
			};

			this.getOrgPublicMembers = function(name) {
				return organizations.publicMembers({
					org: name
				}).$promise.then(function(response) {
					return response.data;
				}).catch(function(e){
					console.log(e);
					return [];
				});
			};

			this.getOrgRepos = function(name) {
				return organizations.repos({
					org: name
				}).$promise.then(function(response) {
					return response.data;
				}).catch(function(e){
					console.log(e);
					return [];
				});
			};
		}
	]);
