export function signIn(){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'token', 
        user: {
          name: 'Diego',
          email: "diego@email.com"
        },
      });
    }, 2000);
  });
}