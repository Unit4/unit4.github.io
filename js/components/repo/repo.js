angular
	.module('U4OssApp')
	.directive('repo', function() {
		return {
			restrict: 'E',
			scope: {
				repo: '=value'
			},
			templateUrl: 'js/components/repo/repo.tpl.html'
		};
	});