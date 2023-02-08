const blogdata = [];
blogdata.push({
  title:'Bienvenido a Blog app',
  slug: 'que-es-react',
  content: 'Esta es una app proyecto con react router V6, tiene varias funcionalidades como borrar agregar comentarios y blogs, ademas cuenta con usuarios admin y basicos. [si quieres probar, los usuarios ADMIN son: Richard, Laura, Luis]. Ademas cuenta con modo oscuro',
  author: 'Richard',
  genero:'M',
  id:'1',
  comments : [{
    content: 'Comentario que puedes borrar si eres dueño del post o usuario Admin',
    author: 'Alfonso'
  }]
})
blogdata.push({
  title:'Tiene localStorage',
  slug: 'que-es-angular',
  content: 'Hago uso de localStorage para los blogs y por lo tanto para los comentarios, por lo que puedes agregar, borrar y comentar (Si tienes los permisos), y todo tendra permanencia local en tu dispositivo ',
  author: 'Laura',
  genero:'F',
  id:'2',
  comments: []
})
blogdata.push({
  title:'Usuarios',
  slug: 'que-es-vue',
  content: 'En el momento de hacer login, tienes que indicar tu genero, de manera que cuando veas tu perfil te encontraras con una imagen de perfil de acuerdo a tu genero, esto no tiene persistencia, asi que cada vez que haya un cambio la imagen tambien lo hara',
  author: 'Jonathan',
  genero:'M',
  id:'3',
  comments: []
})

export { blogdata }