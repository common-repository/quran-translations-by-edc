function audioHTML(surahAudio){
  var html;
  html = '<div class="audio-container">';
  html += '<audio class="audio-player" preload="auto" controls autoplay><source type="audio/mpeg" src="'+surahAudio+'" /></audio>';
  html += '</div>';
  return html;
}

jQuery(document).ready(function($) {
  var getStorage = localStorage.getItem('surah_id');
  if( getStorage != null ){
    var getStorageAudio = $('#element-'+getStorage).attr('data-audio-url');
    $('#element-'+getStorage).append( audioHTML(getStorageAudio) );
  }

  $(".surah-li").click(function () {
    var val = $(this).text();
    var surahId = $(this).attr('data-id');
    var surahName = $(this).attr('data-surah-name');
    var surahAudio = $(this).attr('data-audio-url');
    var get_surah_id = localStorage.getItem('surah_id');

    var html;
    if( surahId > 0 && surahId <= 114 && surahId != get_surah_id ){
      html = audioHTML(surahAudio);
      $('.audio-container').remove();
      $('#element-'+surahId).append(html);
      localStorage.setItem('surah_id', surahId);
    }
  });
})
