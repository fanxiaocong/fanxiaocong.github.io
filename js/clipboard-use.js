/*页面载入完成后，创建复制按钮*/
var initCopyCode = function () {
  var copyHtml = '';
  copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
  copyHtml += '<i class="fa fa-clipboard"></i><span>复制</span>';
  copyHtml += '</button>';

  var $codeArea = $("figure table");
  var $copyButton = $(".highlight .code .btn-copy");

  // 如果页面没有代码区域，或者已经存在复制按钮，则不用再重复创建
  if (!$codeArea.length || $copyButton.length)   return;

  $(".highlight").wrap("<div class='code-wrapper' style='position:relative'></div>");
  $(".highlight .code pre").before(copyHtml);
  // 创建复制对象
  var clipboard = new ClipboardJS('.btn-copy', {
      target: function (trigger) {
          return trigger.nextElementSibling;
      }
  });

  clipboard.on('success', function (e) {
    e.trigger.innerHTML = "<i class='fa fa-check' style='color:green'></i><span style='color:green'>复制成功</span>"
    setTimeout(function () {
        e.trigger.innerHTML = "<i class='fa fa-clipboard'></i><span>复制</span>"
    }, 1000)
    e.clearSelection();
  });
}