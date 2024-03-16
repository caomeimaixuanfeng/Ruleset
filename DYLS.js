// 更新时间 2024-02-17

var body = $response.body;
var obj = JSON.parse(body);
obj.data = obj.data.filter(item => item.layout !== "advert_self");
const carousel = obj.data.find(item => item.title === '轮播图');
if (carousel && carousel.list && carousel.list.length > 0) {
    carousel.list = carousel.list.filter(item => item.type !== 3);
}

$done({ body: JSON.stringify(obj) });
