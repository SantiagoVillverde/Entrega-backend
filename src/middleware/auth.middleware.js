
export function isAuth(req, res, next) {
	
	if (req.user.rol === 'ADMIN') {
	  console.log(req.user.rol, 'no está autorizado');
	
	} else {
	  next();
	}
  }

export function isGuest(req, res, next) { 
	if (!req.user) {
		next();
	} else {
		res.redirect('/');
	}
} 