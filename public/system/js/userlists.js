// 当前记录 id
var currId = '';
$(function() {
  // 获取用户列表数据
  getUserLists();

  // 弹窗 取消/关闭
  $('.alert .close,.alert .btn-danger').click(function() {
    utils.hideOverlay();
    $('.alert').hide();
  })
  // 弹窗 确认
  $('.alert .btn-primary').click(function() {
    utils.hideOverlay();
    $('.alert').hide();
    // 删除当前记录
    deleteUser(currId)
  })
})
// 获取用户列表数据
function getUserLists() {
  $.ajax({
    // 请参照 user2.json 的数据格式返回
    url: '/json/user2.json',
    type: 'GET',
    dataType: 'json',
    success: function(info) {
      if (info.status == 'success') {
        var str = '';
        var data = info.list;
        for (i = 0; i < data.length; i++) {
          str += '<tr>';
          str += '<td class="action-buttons" id="' + data[i].id + '">';
          str += '<i class="ace-icon fa fa-pencil bigger-130 green"></i>';
          str += '<i class="ace-icon fa fa-trash-o bigger-130 red"></i>';
          str += '</td>';
          str += '<td>';
          str += '<a href="/sys/userdesc">' + data[i].email + '</a>';
          str += '</td>';
          str += '<td>' + data[i].fullname + '</td>';
          str += '<td>' + data[i].phone + '</td>';
          str += '<td>正常</td>';
          str += '<td>' + data[i].name + '</td>';
          str += '<td>' + data[i].group_matrix[0].description + '</td>';
          str += '</tr>';
        }
        $('.table tbody').empty();
        $('.table tbody').append(str);
      }

      // 编辑
      $('.action-buttons .fa-pencil').click(function() {
        location.href = '/sys/userdesc'
      })
      // 删除
      $('.action-buttons .fa-trash-o').click(function() {
        currId = $(this).parent().attr('id')
        console.log(currId);
        utils.showOverlay();
        $('.alert').show();
      })
    }
  })
}

// 删除记录
function deleteUser(id) {
  console.log("当前要删除的记录id：" + id);
  // 调用删除接口
  /*$.ajax({
    url: '',
    type: 'POST',
    data: {
      'id': id
    },
    dataType: 'json',
    success: function (info) {
      console.log(info);
    }
  })*/
}