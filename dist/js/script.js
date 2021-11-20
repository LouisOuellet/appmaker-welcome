API.Plugins.welcome = {
	init:function(){
		var checkInit = setInterval(function() {
			if((API.initiated){
				clearInterval(checkInit);
				if(!API.Contents.Auth.User.isWelcomed){
					API.Builder.modal($('body'), {
						title:'Welcome',
						icon:'welcome',
						zindex:'top',
						css:{ header: "bg-info",dialog: "modal-lg", body: ""},
					}, function(modal){
						modal.on('hide.bs.modal',function(){ modal.remove(); });
						var dialog = modal.find('.modal-dialog');
						var header = modal.find('.modal-header');
						var body = modal.find('.modal-body');
						var footer = modal.find('.modal-footer');
						header.find('button[data-control="hide"]').remove();
						header.find('button[data-control="update"]').remove();
						footer.find('button').remove();
						var html = '';
						html += '<div class="welcome">';
							html += '<div class="row">';
		            html += '<div class="col-12">';
									html += '<div class="jumbotron m-0 switch-spacer text-center">';
									  html += '<h1 class="display-4">'+API.Contents.Language['welcome_title']+'</h1>';
									  html += '<p class="lead">'+API.Contents.Language['welcome_message']+'</p>';
									html += '</div>';
								html += '</div>';
							html += '</div>';
							html += '<div class="row mx-3 mr-50">';
								if((JSON.stringify(API.Contents.Auth.Groups)==JSON.stringify(API.Contents.Auth.Roles))&&(JSON.stringify(API.Contents.Auth.Groups)==JSON.stringify(['Users']))){
									html += '<div class="col-2 my-1 p-0 text-center pt-2">';
										html += '<i class="fas fa-user-lock fa-2x"></i>';
									html += '</div>';
									html += '<div class="col-10 my-1 p-0 pt-1">';
										html += '<h4>Limited Access</h4>';
										html += '<p class="text-justify">You currently have limited access. Please contact your administrator to gain additional access.</p>';
									html += '</div>';
								}
								html += '<div class="col-2 my-1 p-0 text-center pt-2">';
									html += '<i class="fas fa-user-tie fa-2x"></i>';
								html += '</div>';
								html += '<div class="col-sm-10 col-md-4 my-1 p-0 pt-1">';
									html += '<h4>Personalization</h4>';
		              html += '<p class="text-justify">The profile page gives you full control over your user and related information. Visit your <a href="?p=profile">profile page</a>.</p>';
		            html += '</div>';
								html += '<div class="col-2 my-1 p-0 text-center pt-2">';
									html += '<i class="fas fa-moon fa-2x"></i>';
								html += '</div>';
								html += '<div class="col-sm-10 col-md-4 my-1 p-0 pt-1">';
									html += '<h4>Dark Mode</h4>';
		              html += '<p class="text-justify">Dark mode is great whenever you are working in a low light environment. Visit the <a href="?p=profile">profile page</a> and activate "Dark mode".</p>';
		            html += '</div>';
								if(API.Auth.validate('custom', 'organizations_calls', 1)){
									html += '<div class="col-2 my-1 p-0 text-center pt-2">';
										html += '<i class="fas fa-phone fa-2x"></i>';
									html += '</div>';
									html += '<div class="col-sm-10 col-md-4 my-1 p-0 pt-1">';
										html += '<h4>Inline Controls</h4>';
		                html += '<p class="text-justify">Inline call controls are usefull if you do not want to open the call details everytime to access your call\'s controls. Visit the <a href="?p=profile">profile page</a> and activate "Inline call controls".</p>';
		              html += '</div>';
									html += '<div class="col-2 my-1 p-0 text-center pt-2">';
										html += '<i class="fas fa-window-restore fa-2x"></i>';
									html += '</div>';
		              html += '<div class="col-sm-10 col-md-4 my-1 p-0 pt-1">';
										html += '<h4>Call Widget</h4>';
		                html += '<p class="text-justify">The call widget gives you quick access to any active calls. Visit the <a href="?p=profile">profile page</a> and activate "Show call widget".</p>';
		              html += '</div>';
								}
		          html += '</div>';
						html += '</div>';
						body.append(html);
						body.find('a[href^="?p="]').off().click(function(action){
							action.preventDefault();
							var text = action.currentTarget.textContent
							if(action.currentTarget.attributes.href.value == '?p=profile'){ text = 'Profile'; }
							API.GUI.Breadcrumbs.add(text, action.currentTarget.attributes.href.value);
							API.GUI.load($('#ContentFrame'),action.currentTarget.attributes.href.value);
							modal.modal('hide');
						});
						modal.modal('show');
					});
				}
			}
		});
	}
}

API.Plugins.welcome.init();
