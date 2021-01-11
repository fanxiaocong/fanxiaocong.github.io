function initValine() {
  comment = $('#valine-container');
  if (comment.length) {
      valine = new Valine({
          el: '#valine-container',
          appId: comment.data('appid'),
          appKey: comment.data('appkey'),
          avatar: comment.data('avatar'),
          enableQQ: comment.data('enableqq'),
          placeholder: comment.data('placeholder'),
          visitor: true
      });
  }
}