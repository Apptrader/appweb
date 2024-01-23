const ProfileCard = ({ user }) => {

  
  return (
    <div className='card bg-gradient-to-br from-gray-700 to-black text-white p-4 shadow-md rounded-lg'>
      <div className='flex justify-center'>
        <img
          src="https://img.freepik.com/vector-premium/icono-perfil-usuario-estilo-plano-ilustracion-vector-avatar-miembro-sobre-fondo-aislado-concepto-negocio-signo-permiso-humano_157943-15752.jpg"
          alt='User'
          className='w-24 h-24 object-cover rounded-full border-4 border-white'
        />
      </div>
      <div className='p-4'>
        <h2 className='text-xl font-bold mb-2'>{user.UserName}</h2>
        <p className='text-gray-100'>{user.bio}</p>
      </div>
    </div>
  );
}

export default ProfileCard;