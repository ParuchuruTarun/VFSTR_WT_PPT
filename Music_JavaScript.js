function playSong(albumName, Song) {
  const audioPlayer = document.getElementById('audio-player');
  switch(albumName) {
    case 'Taylor_Swift_Album':
      switch(Song) {
        case 'Lover':
          audioPlayer.src = 'Music_Taylor_Swift_Lover.mp3';
          break;
        case 'Cruel Summer':
          audioPlayer.src = 'Music_Taylor_Swift_CruelSummer.mp3';
          break;
        case 'August':
          audioPlayer.src = 'Music_Taylor_Swift_August.mp3';
          break;
        case 'Blank Space':
          audioPlayer.src = 'Music_Taylor_Swift_BlankSpace.mp3';
          break;
        }
      break;
    case 'ED_Sheeran_Album':
      switch(Song) {
        case 'Perfect':
          audioPlayer.src = 'Music_EDSheeran_Perfect.mp3';
          break;
        case 'Shape Of You':
          audioPlayer.src = 'Music_EDSheeran_ShapeOfYou.mp3';
          break;
        case 'Photograph':
          audioPlayer.src = 'Music_EDSheeran_Photograph.mp3';
          break;
      }
      break;
    case 'SP_Balasubrahmanyam_Album':
      switch(Song){
        case 'Prema Prema':
          audioPlayer.src = 'Music_SPB_Prema.mp3';
          break;
        case 'Chuttu Chutti':
          audioPlayer.src = 'Music_SPB_Chutu.mp3';
          break;
        case 'Chinuku Chinuku':
          audioPlayer.src = 'Music_SPB_Chinuku.mp3';
          break;
        case 'Andamaina Premarani':
          audioPlayer.src = 'Music_SPB_Anda.mp3';
          break;
      }
      break;
    case 'Anirudh_Album':
      switch(Song){
        case 'Fear(Devara)':
          audioPlayer.src = 'Music_Anirudh_Fear.mp3';
          break;
        case 'Andamaina Premarani':
          audioPlayer.src = 'Music_SPB_Anda.mp3';
          break;
      }
      break;
    case 'Chitra_Album':
      switch(Song){
        case 'Chuttu Chutti':
          audioPlayer.src = 'Music_SPB_Chutu.mp3';
          break;
        case 'Chinuku Chinuku':
          audioPlayer.src = 'Music_SPB_Chinuku.mp3';
          break;
      }
      break;
    case 'Shreya_Ghoshal_Album':
      switch(Song){
        case 'Oh Sita Hey Rama':
          audioPlayer.src = 'Music_Sita_OfSetha.mp3';
          break;
        case 'Janani':
          audioPlayer.src = 'Music_RRR_Janani.mp3';
          break;
      }
      break;
    case 'AR_Rahman_Album':
      switch(Song){
        case 'Nattu Nattu':
          audioPlayer.src = 'Music_RRR_Nattu.mp3';
          break;
        case 'Andamaina Premarani':
          audioPlayer.src = 'Music_SPB_Anda.mp3';
          break;
      }
      break;   
    case 'Adele_Album':
      switch(Song){
        case 'Lover':
          audioPlayer.src = 'Music_Taylor_Swift_Lover.mp3';
          break;
        case 'Cruel Summer':
          audioPlayer.src = 'Music_Taylor_Swift_CruelSummer.mp3';
          break;
      }
      break;
    case 'Dua_Lipa_Album':
      switch(Song){
        case 'August':
          audioPlayer.src = 'Music_Taylor_Swift_August.mp3';
          break;
      }
      break;
    case 'Billie_Eilish_Album':
      switch(Song){
        case 'Blank Space':
          audioPlayer.src = 'Music_Taylor_Swift_BlankSpace.mp3';
          break;
      }
      break;
    // Album songes are completed. now lets start eith the movies.
    case 'Devara__movie_Songs':
      switch(Song){
        case 'Fear':
          audioPlayer.src = 'Music_Anirudh_Fear.mp3';
          break;
        case 'Chuttamalle':
          audioPlayer.src = 'Music_Devara_Chuttamalle.mp3';
          break;
        case 'All Hail The Tiger':
          audioPlayer.src = 'Music_Devara_AllHailTheTiger.mp3';
          break;
      }
      break;
    case 'AlaVaikuntapuramLo_movie_songs':
      switch(Song){
        case 'Samajavaragamana':
          audioPlayer.src = 'Music_AlaVlo_Samaja.mp3';
          break;
        case 'Ramuloo Ramulaa':
          audioPlayer.src = 'Music_AlaVlo_Ramuloo.mp3';
          break;
        case 'Butta Bomma':
          audioPlayer.src = 'Music_AlaVlo_Butta.mp3';
          break;
        case 'Sittharala Sirapadu':
          audioPlayer.src = 'Music_AlaVlo_Sittharala.mp3';
          break;
      }
      break;
    case 'SitaRamam_movie_songs':
      switch(Song){
        case 'Oh Sita Hey Rama':
          audioPlayer.src = 'Music_Sita_OfSetha.mp3';
        break;
        case 'Inthandham':
          audioPlayer.src = 'Music_Sita_Inthandam.mp3';
        break;
        case 'Kaanunna Kalyanam':
          audioPlayer.src = 'Music_Sita_kanuna.mp3';
        break;
      }
      break;
    case 'RRR_movie_songs':
      switch(Song){
        case 'Nattu Nattu':
          audioPlayer.src = 'Music_RRR_Nattu.mp3';
          break;
        case 'Janani':
          audioPlayer.src = 'Music_RRR_Janani.mp3';
          break;
        case 'Komuram Bheemudo':
          audioPlayer.src = 'Music_RRR_Komuram.mp3';
          break;
        case 'Ettara Jenda':
          audioPlayer.src = 'Music_RRR_Nethuru.mp3';
          break;
        case 'Komma Uyyala':
          audioPlayer.src = 'Music_RRR_Koamma.mp3';
          break;
      }
      break;
    case 'English_movie_songs':
      switch(Song){
        case 'The Greatest Showman':
          audioPlayer.src = 'Music_TGS_Tgs.mp3';
          break;
        case 'Never Enough':
          audioPlayer.src = 'Music_TGS_Never.mp3';
          break;
        case 'This is Me':
          audioPlayer.src = 'Music_TGS_This.mp3';
          break;
      }
      break;
  }
  audioPlayer.play();
}

// You can also add visualizer or animations based on audio context

function createTaskButtons(id) {
    // Get the element by ID
    const element = document.getElementById(id);

    // Check if the element exists
    if (element) {
      // Retrieve the data-tasks attribute value and parse it as JSON
        const tasks = JSON.parse(element.getAttribute('data-tasks'));
        
        // Get the button area element
        const buttonArea = document.getElementById('buttonArea');
        
        // Clear any existing buttons
        buttonArea.innerHTML = '';

        // Loop through the tasks and create buttons for each
        tasks.forEach(task => {
            const button = document.createElement('button');
            button.className = 'task-button';
            button.textContent = task;
            button.onclick = function() {
              alert(`You clicked: ${task} Song`);
              playSong(id, task);
            };
            buttonArea.appendChild(button);
        });
    } else {
        console.error(`Element with ID '${id}' not found.`);
    }
  }
