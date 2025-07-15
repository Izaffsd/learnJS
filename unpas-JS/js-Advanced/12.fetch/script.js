fetch('dataPel.json')
  .then( resp =>  resp.json() )  // data dalalm promise // dah kalau promise kalau nak jalan dalam asynchronous so kene dalam then lagi ( undefined kalau console.log yang first )
  .then( data => {
    console.log( data )
  })
  .catch( err => console.error(err))
