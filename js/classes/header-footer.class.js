class HeaderFooter extends Base {

	defaultPropertyValues(){
		return{
			user: new User()
			
		}
	}

	constructor(propertyValues={}){
		super(propertyValues);
		this.user = new User();
	}

	logout(){
		// $(this).toggleClass('active');
		// $(this).text('Projects Viewed');
		if (confirm("Are you sure you want to log out?") == true) {
			sessionStorage.clear();
			document.location.href = '/';
		}

	}

	
}