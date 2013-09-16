// Generated by CoffeeScript 1.6.3
(function() {
  var $addReplyButton, $bottomAddComment, $bottomPagination, $browseTable, $browseTableAdded, $browseTableComm, $browseTableFiles, $browseTableHeader, $browseTableLeechers, $browseTableName, $browseTablePeers, $browseTableRow, $browseTableSeeders, $browseTableSize, $browseTableSnatched, $browseTableType, $browseTableUppedby, $commentsBody, $commentsBox, $commentsContent, $commentsEditLink, $commentsHeader, $commentsLikeLink, $commentsPmLink, $commentsQuoteLink, $commentsTable, $commentsTableInner, $commentsUser, $content, $forumsTable, $forumsTableHeader, $forumsTableRow, $forumsTableRowForum, $forumsTableRowLastTopic, $forumsTableRowPosts, $forumsTableRowTopics, $header, $menu, $menuMore, $messageBox, $messageContent, $messageDeleteAllButton, $messageDeleteButton, $messageMenu, $messageReplyButton, $messageUser, $subject, $textarea, $topAddComment, $topPagination, $topicTable, $topicTableHeader, $topicTableRow, $topicTableRowAuthor, $topicTableRowLastPost, $topicTableRowReplies, $topicTableRowTopic, $topicTableRowViews, $torrentCommentLink, html, id, p, page, pudu, title, url, v;

  pudu = window.pudu;

  url = window.location.href;

  page = {
    viewtopic: url.indexOf('/forums.php?action=viewtopic') !== -1 || url.indexOf('/markets.php?action=viewtopic') !== -1,
    viewforum: url.indexOf('/forums.php?action=viewforum') !== -1 || url.indexOf('/markets.php?action=viewforum') !== -1 || url.indexOf('/markets.php?action=viewall') !== -1,
    forums: (url.indexOf('/forums.php') !== -1 || url.indexOf('/markets.php') !== -1) && url.indexOf('?action=') === -1,
    browse: url.indexOf('/browse.php') !== -1,
    details: url.indexOf('/details.php') !== -1,
    inbox: url.indexOf('/inbox.php') !== -1 && url.indexOf('?out=1') === -1,
    sentbox: url.indexOf('/inbox.php?out=1') !== -1,
    history: url.indexOf('/userhistory.php') !== -1,
    newtopic: url.indexOf('/forums.php?action=newtopic') !== -1 || url.indexOf('/markets.php?action=newtopic') !== -1
  };

  $menu = $('.outer:first');

  $content = $('.outer:last');

  $header = $('h1:first');

  if (page.viewtopic || page.viewforum) {
    $topPagination = $('h1+p:first');
    $bottomPagination = $('table+p:first');
  }

  if (page.viewtopic || page.details || page.history) {
    $commentsTable = $('table.main[width="750"]');
    $commentsContent = $('.comment');
    $commentsTableInner = $commentsTable.find('table:first');
    $commentsBox = $commentsTableInner.find('a[name] > table').parent();
    $commentsHeader = $commentsTableInner.find('p.sub > table');
    $commentsBody = $commentsBox.find('>table.main');
    $commentsUser = $commentsHeader.find('a[href^="userdetails.php"]');
    $commentsPmLink = $commentsHeader.find('a[href^="sendmessage.php"]');
    $commentsQuoteLink = $commentsHeader.find('a[href^="?action=quotepost"]');
    $commentsLikeLink = $commentsHeader.find('a[href^="forums.php?action=likes"]');
    $commentsEditLink = $commentsHeader.find('a[href^="?action=editpost"]');
    $torrentCommentLink = $('a[href^="comment.php?action=add"]');
  }

  if (page.viewtopic) {
    $addReplyButton = $('input[value="Add Reply"]');
  }

  if (page.forums) {
    $forumsTable = $('h1+p+table, h1+table');
    $forumsTableRow = $forumsTable.find('tbody > tr');
    $forumsTableHeader = $forumsTable.find('tbody > tr:eq(0)');
    $forumsTableRowForum = $forumsTableRow.find('> td:eq(0)');
    $forumsTableRowTopics = $forumsTableRow.find('> td:eq(1)');
    $forumsTableRowPosts = $forumsTableRow.find('> td:eq(2)');
    $forumsTableRowLastTopic = $forumsTableRow.find('> td:eq(3)');
  }

  if (page.details || page.history) {
    $topPagination = $('p[align="center"]:eq(1)');
    $bottomPagination = $('p[align="center"]:eq(2)');
    $topAddComment = $('p[align="center"]:eq(0) > a');
    $bottomAddComment = $('p[align="center"]:eq(3) > a');
    $commentsHeader = $('p.sub');
    $commentsBody = $('p.sub+table');
    $commentsContent = $commentsBody.find('td.text');
    $commentsUser = $commentsHeader.find('a[href^="userdetails.php"]');
  }

  if (page.viewforum) {
    $topicTable = $topPagination.next();
    $topicTableRow = $topicTable.find('tbody > tr');
    $topicTableHeader = $topicTable.find('tbody > tr:eq(0)');
    $topicTableRowTopic = $topicTableRow.find('> td:eq(0)');
    $topicTableRowReplies = $topicTableRow.find('> td:eq(1)');
    $topicTableRowViews = $topicTableRow.find('> td:eq(2)');
    $topicTableRowAuthor = $topicTableRow.find('> td:eq(3)');
    $topicTableRowLastPost = $topicTableRow.find('> td:eq(4)');
  }

  if (page.browse) {
    $topPagination = $('p[align="center"]:eq(1)');
    $bottomPagination = $('p[align="center"]:eq(2)');
    $browseTable = $topPagination.next();
    $browseTableRow = $browseTable.find('tbody > tr');
    $browseTableHeader = $browseTable.find('tbody > tr:eq(0)');
    $browseTableType = $browseTableRow.find('> td:eq(0)');
    $browseTableName = $browseTableRow.find('> td:eq(1)');
    $browseTableFiles = $browseTableRow.find('> td:eq(2)');
    $browseTableComm = $browseTableRow.find('> td:eq(3)');
    $browseTableAdded = $browseTableRow.find('> td:eq(4)');
    $browseTableSize = $browseTableRow.find('> td:eq(5)');
    $browseTableSnatched = $browseTableRow.find('> td:eq(6)');
    $browseTablePeers = $browseTableRow.find('> td:eq(7)');
    $browseTableSeeders = $browseTableRow.find('> td:eq(8)');
    $browseTableLeechers = $browseTableRow.find('> td:eq(9)');
    $browseTableUppedby = $browseTableRow.find('> td:eq(10)');
  }

  if (page.inbox || page.sentbox) {
    $messageBox = $('.main[width=750] td:first > p');
    $messageUser = $messageBox.find('.text:first > b > a[href^="userdetails.php"]');
    $messageContent = $messageBox.find('.text:first > p:eq(0) .text');
    $messageMenu = $messageBox.find('.text:first > p:eq(1)');
    $messageReplyButton = $messageMenu.find('a[href^="sendmessage.php"]');
    $messageDeleteButton = $messageMenu.find('a[href^="deletemessage.php?id="]');
    $messageDeleteAllButton = $messageMenu.find('a[href^="deletemessage.php?empty=1"]');
  }

  for (p in page) {
    v = page[p];
    if (v === true) {
      $('body').addClass("pudu-page-" + p);
    }
  }

  $menu.addClass('pudu-menu');

  $content.addClass('pudu-content');

  $header.addClass('pudu-header');

  if (page.viewtopic || page.details || page.browse) {
    $topPagination.addClass('pudu-top-pagination');
    $bottomPagination.addClass('pudu-bottom-pagination');
  }

  if (page.viewtopic || page.details || page.history) {
    $commentsTable.addClass('pudu-comments-table');
    $commentsTableInner.addClass('pudu-comments-table-inner');
    $commentsBox.addClass('pudu-comments-box');
    $commentsHeader.addClass('pudu-comments-header');
    $commentsContent.addClass('pudu-comments-content');
    $commentsBody.addClass('pudu-comments-body');
    $commentsUser.addClass('pudu-comments-user');
    $commentsPmLink.addClass('pudu-comments-pm-link');
    $commentsQuoteLink.addClass('pudu-comments-quote-link');
    $commentsLikeLink.addClass('pudu-comments-like-link');
    $commentsEditLink.addClass('pudu-comments-edit-link');
  }

  if (page.forums) {
    $forumsTable.addClass('pudu-forums-table');
    $forumsTableRow.addClass('pudu-forums-table-row');
    $forumsTableHeader.removeClass('pudu-forums-table-row').addClass('pudu-forums-table-header');
    $forumsTableRowForum.addClass('pudu-forums-table-row-forum');
    $forumsTableRowTopics.addClass('pudu-forums-table-row-topic');
    $forumsTableRowPosts.addClass('pudu-forums-table-row-posts');
    $forumsTableRowLastTopic.addClass('pudu-forums-table-row-lasttopic');
  }

  if (page.details) {
    $topAddComment.addClass('pudu-top-add-comment');
    $bottomAddComment.addClass('pudu-bottom-add-comment');
  }

  if (page.viewforum) {
    $topicTable.addClass('pudu-topic-table');
    $topicTableRow.addClass('pudu-topic-table-row');
    $topicTableHeader.removeClass('pudu-topic-table-row').addClass('pudu-topic-table-header');
    $topicTableRowTopic.addClass('pudu-topic-table-row-topic');
    $topicTableRowReplies.addClass('pudu-topic-table-row-repiles');
    $topicTableRowViews.addClass('pudu-topic-table-row-views');
    $topicTableRowAuthor.addClass('pudu-topic-table-row-author');
    $topicTableRowLastPost.addClass('pudu-topic-table-row-lastpost');
  }

  if (page.browse) {
    $browseTable.addClass('pudu-browse-table');
    $browseTableRow.addClass('pudu-browse-table-row');
    $browseTableHeader.removeClass('pudu-browse-table-row').addClass('pudu-browse-table-header');
    $browseTableType.addClass('pudu-browse-table-row-type');
    $browseTableName.addClass('pudu-browse-table-row-name');
    $browseTableFiles.addClass('pudu-browse-table-row-files');
    $browseTableComm.addClass('pudu-browse-table-row-comm');
    $browseTableAdded.addClass('pudu-browse-table-row-added');
    $browseTableSize.addClass('pudu-browse-table-row-size');
    $browseTableSnatched.addClass('pudu-browse-table-row-snatched');
    $browseTablePeers.addClass('pudu-browse-table-row-peers');
    $browseTableSeeders.addClass('pudu-browse-table-row-seeders');
    $browseTableLeechers.addClass('pudu-browse-table-row-leechers');
    $browseTableUppedby.addClass('pudu-browse-table-row-uppedby');
  }

  if (page.inbox || page.sentbox) {
    $messageBox.addClass('pudu-message-box');
    $messageUser.addClass('pudu-message-user');
    $messageContent.addClass('pudu-message-content');
    $messageMenu.addClass('pudu-message-menu');
    $messageReplyButton.addClass('pudu-message-reply-button');
    $messageDeleteButton.addClass('pudu-message-delete-button');
    $messageDeleteAllButton.addClass('pudu-message-delete-all-button');
  }

  if (page.viewtopic) {
    $('a[href="#top"]').hide();
    $commentsBox.css('backgroundColor', $commentsHeader.css('backgroundColor'));
    $commentsEditLink.each(function() {
      return $(this).attr('data-href', $(this).attr('href')).attr('href', 'javascript:void(0)');
    });
    $commentsQuoteLink.each(function() {
      return $(this).attr('data-href', $(this).attr('href')).attr('href', 'javascript:void(0)');
    });
    $commentsPmLink.each(function() {
      return $(this).attr('data-href', $(this).attr('href')).attr('href', 'javascript:void(0)');
    });
  }

  if (page.details) {
    $topAddComment.attr('href', '#pudu-quick-comment');
  }

  if (page.viewforum) {
    $('.pudu-topic-table-row > td, .pudu-topic-table-header > td').css('borderColor', $('.pudu-topic-table-header > td:first').css('backgroundColor'));
  }

  if (page.browse) {
    $('.pudu-browse-table-row > td, .pudu-browse-table-header > td').css('borderColor', $('.pudu-browse-table-header > td:first').css('backgroundColor'));
    $browseTableHeader.find('a').css('color', $browseTableHeader.find('td').css('color'));
    $browseTableRow.find('img[src="pic/xr.gif"], img[src="pic/xl.gif"]').remove();
  }

  if (page.forums) {
    $('.pudu-forums-table-row > td, .pudu-forums-table-header > td').css('borderColor', $('.pudu-forums-table-header > td:first').css('backgroundColor'));
  }

  if (page.inbox) {
    $messageReplyButton.each(function() {
      return $(this).attr('data-href', $(this).attr('href')).attr('href', 'javascript:void(0)');
    });
  }

  $().UItoTop({
    scrollSpeed: 'normal',
    easingType: 'swing'
  });

  $content.on('click', '.pudu-btn-remove-quick-box', function() {
    return $(".quick-box").remove();
  });

  $content.on('click', '.emo li, .emo a', function(event) {
    var textareaId;
    event.preventDefault();
    event.stopImmediatePropagation();
    event.stopPropagation();
    textareaId = $(this).parents('.emo').data('id') + '-textarea';
    if ($(this).data('text')) {
      pudu.insertAtCaret(textareaId, $(this).data('text'));
    } else if ($(this).data('prefix') && $(this).data('suffix')) {
      pudu.insertWrapCaret(textareaId, $(this).data('prefix'), $(this).data('suffix'));
    }
    return false;
  });

  $menu.find('.navigation:last').after(['<td align="center" class="navigation"><a href="inbox.php">Inbox</a></td>', '<td align="center" class="navigation"><a href="inbox.php?out=1">Sentbox</a></td>', '<td align="center" class="navigation"><a href="logout.php">Logout</a></td>', '<td align="center" class="navigation">+<a href="javascript:void(0)" id="pudu-menu-more-button">More</a></td>'].join(''));

  $menu.find('> table > tbody > tr:first').after('<tr class="pudu-menu-more hide"></tr>');

  $menuMore = $('.pudu-menu-more');

  $('#pudu-menu-more-button').on('click', function() {
    return $menuMore.toggleClass('hide');
  });

  $menuMore.append('<td align="center" class="navigation"><a href="userdetails.php?id=' + pudu.getCookie('xid') + '">User</a></td>', $menu.find('a[href="http://lolthai.com/oforums.php"]').parent(), '<td align="center" colspan="2" class="navigation"><a href="userhistory.php?action=viewnewposts&id=' + pudu.getCookie('xid') + '">Forums History</a></td>', '<td align="center" class="navigation"><a href="userhistory.php?action=viewmarkets&id=' + pudu.getCookie('xid') + '">Markets History</a></td>', $menu.find('a[href="http://lolthai.com/pets.php"]').parent(), '<td align="center" class="navigation"><a href="bookmark.php">Bookmark</a></td>', $menu.find('a[href="http://lolthai.com/arena.php"]').parent(), '<td align="center" class="navigation" colspan="2"><a href="users.php">Search Users</a></td>', $menu.find('a[href="http://lolthai.com/casino.php"]').parent(), $menu.find('a[href="http://lolthai.com/chat.php"]').parent());

  if (page.forums) {
    $('title').text($header.text());
  }

  if (page.viewforum) {
    $('title').text($header.text());
  }

  if (page.viewtopic) {
    title = $header.text();
    $('title').text(title.substring(title.indexOf('> ') + 2));
    if ($addReplyButton.size() > 0) {
      $bottomPagination.after($(pudu.commentHtml('?action=post', 'topicid', 'body')).find('input[name="topicid"]').val($('input[name="topicid"]').val()).end().html());
    }
    $commentsContent.each(function() {
      var cIndex, html;
      html = $(this).html();
      cIndex = html.indexOf('<br>------------------------<br>');
      if (cIndex !== -1) {
        return $(this).html(html.substring(0, cIndex) + '<div class="hide pudu-comment-signature" >' + html.substring(cIndex) + '</div>');
      }
    });
    $('body').on('keydown', function(e) {
      if (e.ctrlKey && e.altKey) {
        return $('.pudu-comment-signature').toggleClass('hide');
      }
    });
    $commentsBox.each(function() {
      var focus, name, score;
      score = $(this).find('td.embedded[width="99%"] b:last').text();
      name = $(this).attr('name');
      if ((10 >= score && score > 0)) {
        focus = 1;
      } else if ((20 >= score && score > 10)) {
        focus = 2;
      } else if ((30 >= score && score > 20)) {
        focus = 3;
      } else if ((40 >= score && score > 30)) {
        focus = 4;
      } else if (score > 40) {
        focus = 5;
      }
      if (focus > 0) {
        return $commentsBox.filter("[name='" + name + "']").addClass("focus-" + focus).css('borderColor', $commentsContent.css('borderColor'));
      }
    });
    $commentsBox.each(function() {
      var $html, html, name;
      name = $(this).attr('name');
      if (name === 'last') {
        name = $(this).prev().attr('name');
      }
      $header = $(this).find('.pudu-comments-header');
      html = $header.html().replace(' GMT', '').replace("#" + name, '').replace(/\[/g, '').replace(/\]/g, '').replace('--', '-');
      $html = $(html).find('a:not(.pudu-comments-user, .pudu-comments-like-link)').each(function() {
        return $(this).text($(this).text());
      }).end();
      return $header.html($html);
    });
    $commentsHeader.on('click', '.pudu-comments-edit-link, .pudu-comments-quote-link', function() {
      var $cbox, id, isEdit;
      isEdit = $(this).is('.pudu-comments-edit-link');
      $cbox = $(this).parents('.pudu-comments-box');
      id = 'quick-' + $cbox.attr('name');
      $(".quick-box").remove();
      $cbox.after("<div id='" + id + "' class='quick-box'><div style='text-align:center;'>loading...</div></div>");
      $("html, body").animate({
        scrollTop: $("#" + id).offset().top - 40
      });
      return $.get($(this).data('href')).done(function(res) {
        var $qcom, $res, hiddenName;
        hiddenName = isEdit ? 'returnto' : 'topicid';
        title = isEdit ? 'Edit' : 'Quote ' + $cbox.find('.pudu-comments-user').html();
        $res = $(res);
        $qcom = $(pudu.commentHtml($res.find('form').attr('action'), hiddenName, 'body', id, true));
        $qcom.find('.pudu-quick-comment-textarea').html($res.find('textarea[name="body"]').html());
        $qcom.find('.pudu-quick-comment-title').html(title);
        $qcom.find('input[name="' + hiddenName + '"]').val($res.find('input[name="' + hiddenName + '"]').val());
        $("#" + id).html($qcom.html());
        return $("#" + id).find('.pudu-quick-comment-textarea').focus();
      }).fail(function() {
        return $("#" + id).html('Fail...').fadeOut('slow', function() {
          return $(this).remove();
        });
      });
    });
    $commentsHeader.on('click', '.pudu-comments-pm-link', function() {
      var $cbox, $receiver, html, id;
      $cbox = $(this).parents('.pudu-comments-box');
      id = 'quick-' + $cbox.attr('name');
      $(".quick-box").remove();
      $cbox.after("<div id='" + id + "' class='quick-box'></div>");
      $("html, body").animate({
        scrollTop: $("#" + id).offset().top - 40
      });
      $receiver = $cbox.find('.pudu-comments-user');
      html = pudu.pmHtml(window.location.href, $receiver.html(), pudu.parseUrlQuery($receiver.attr('href')).id);
      $("#" + id).html(html);
      return $("#" + id).find('.pudu-quick-comment-textarea').focus();
    });
  }

  if (page.details) {
    $('title').text($header.text());
    html = $(pudu.commentHtml('comment.php?action=add', 'tid', 'text')).find('input[name="tid"]').val(pudu.parseUrlQuery().id).end().html() + '<br/>';
    if ($bottomAddComment.size() > 0) {
      $bottomAddComment.before(html);
    } else {
      $topAddComment.before(html);
    }
    $commentsHeader.each(function() {
      var name;
      name = $(this).find('.pudu-comments-user').attr('name').replace('comm', '');
      html = $(this).html().replace(' GMT', '').replace("#" + name, '').replace(/\[/g, '').replace(/\]/g, '').replace('--', '-');
      return $(this).html(html);
    });
  }

  if (page.browse) {
    $browseTableName.each(function() {
      var $td, link;
      link = $(this).find('a:first');
      if (link.size() > 0) {
        $td = $(this).siblings('.pudu-browse-table-row-peers').html("<a class='pudu-direct-download' data-url='" + (link.attr('href')) + "' href='javascript:void(0);'>torrent</a>");
      } else {
        $td = $(this).siblings('.pudu-browse-table-row-peers').text('Download');
      }
      return $(this).after($td);
    });
    $('.pudu-direct-download').on('click', function() {
      var _this = this;
      if (!$(this).is('.disable')) {
        $(this).text('loading');
        $('.pudu-direct-download').addClass('disable');
        url = $(this).data('url');
        return $.get(url).done(function(res) {
          window.location.href = $(res).find('a[href^="download.php"]').attr('href');
          $(_this).text('torrent');
          return $('.pudu-direct-download').removeClass('disable');
        }).fail(function() {
          $(_this).text('try again');
          return $('.pudu-direct-download').removeClass('disable');
        });
      }
    });
  }

  if (page.sentbox || page.inbox) {
    $('title').text($('title').text().replace('--- :: ', ''));
    $messageContent.each(function() {
      return $(this).html(pudu.parseBBCodeImage($(this).html()));
    });
    $messageBox.each(function() {
      if ($(this).find('.text > b > font[color="red"]').size() > 0) {
        return $(this).addClass('focus-1');
      }
    });
    $messageMenu.find('a').each(function() {
      return $(this).text($(this).text());
    });
    $messageDeleteAllButton.on('click', function() {
      return confirm("Delete all message ?");
    });
    $messageDeleteButton.on('click', function() {
      return confirm("Delete message from " + ($(this).parents('.pudu-message-box').find('.pudu-message-user').text()) + " ?");
    });
    $messageReplyButton.on('click', function() {
      var $mbox, href, id;
      $mbox = $(this).parents('.pudu-message-box');
      id = pudu.random('quick-reply');
      $(".quick-box").remove();
      $mbox.after("<div id='" + id + "' class='quick-box'><div style='text-align:center;'>loading...</div></div>");
      $("html, body").animate({
        scrollTop: $("#" + id).offset().top - 40
      });
      href = $(this).data('href');
      return $.get(href).done(function(res) {
        var $receiver, $res;
        $res = $(res);
        $receiver = $mbox.find('.pudu-message-user');
        html = pudu.replyHtml($receiver.text(), pudu.parseUrlQuery(href).receiver, pudu.parseUrlQuery(href).replyto, $res.find('textarea[name="msg"]').html(), id);
        $("#" + id).html(html);
        return $("#" + id).find('.pudu-quick-comment-textarea').focus();
      }).fail(function() {
        return $("#" + id).html('Fail...').fadeOut('slow', function() {
          return $(this).remove();
        });
      });
    });
  }

  if (page.history) {
    page = url.indexOf('?action=viewnewposts') !== -1 ? 'Forums' : 'Markets';
    $('title').text("" + page + " History");
    $header.html($header.html().replace('Post history', "" + page + " History"));
    $commentsHeader.each(function() {
      html = $(this).html();
      html = html.replace('&nbsp;--&nbsp;<b>Forum:&nbsp;</b>', ' - ').replace('&nbsp;--&nbsp;<b>Topic:&nbsp;</b>', ' / ').replace('GMT', '').replace('&nbsp;--&nbsp;<b>Post:&nbsp;</b>', ' - ');
      return $(this).html(html);
    });
  }

  if (page.newtopic) {
    id = pudu.random();
    $subject = $('input[name="subject"]').css({
      width: '100%'
    });
    $textarea = $('textarea[name="body"]');
    $textarea.css({
      width: '100%'
    }).attr('id', "" + id + "-textarea").after(pudu.emoHtml(id));
  }

  window.onload = function() {
    if ($('#lth_extra_menu').size() > 0) {
      $('#lth_extra_menu').remove();
    }
    if ($('#lth_emo_tabs').size() > 0) {
      return $('#lth_emo_tabs').before($('.emo').parent());
    }
  };

  
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-33895633-10']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
;

}).call(this);

/*
//@ sourceMappingURL=pudu.map
*/
