angular.module('PropertySvc', [])

.service('ListProperties', function () {
    var props = [
        { title: 'Bangalore home', id: 1, imgUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQhrst5-mxfQqMqJtvxNFunLWMO8dBKVxtCqy-3xVohzv4jVYBs', address: '15, XYZ avenue, BTM Layout, Banglore', landlord: 'A N Other', avatarUrl:'https://paintingportraittips.com/wp-content/upload_folders/paintingportraittips.com/2015/10/Little-girl4.jpg'  },
        { title: 'Mysore Road Land', id: 2, imgUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRYNIxouyKmtZLHPkmehTsHH-yQ0pOnxCloxA-ULweXdqlHiJ5Kpw', address: 'Plot No 135, ABC Village, Mysore Highway', landlord: 'Jayakumar S', avatarUrl: 'https://scontent-lhr3-1.xx.fbcdn.net/v/t31.0-8/s960x960/13613660_10153836170551872_6242019578402062140_o.jpg?oh=4638e05a7eba7ee92aa0303b09a28014&oe=591D06C1' },
    ];
    this.all = function () {
        return props;
    }
    this.get = function (id) {
        return props.filter(function (x) { return x.id == id;})
    }

})

.service('ListReports', function () {
    var reports = [
        { propertyid: 1, reportdate: '01/01/2016', summary: 'All good, no issues', details: 'Inspection completed and everything looks fine, also checked the bill payments, kitchen appliances and all worked fine', electricity: true, water: true, tax: true, neighbours: true, agent: 'Kumar', agentUrl: 'http://scontent.cdninstagram.com/t51.2885-15/s480x480/e15/10729417_1487816298154631_257353975_n.jpg?ig_cache_key=ODQxMTUzNzI3MTMzNjg1Mjg4.2' },
        { propertyid: 1, reportdate: '01/03/2016', summary: 'All good exception outstanding EB bill', details: 'All as expected except the EB is now over due, Tenant informed me he will pay by close of this week', electricity: false, water: true, tax: true, neighbours: true, agent: 'Kumar', agentUrl: 'http://scontent.cdninstagram.com/t51.2885-15/s480x480/e15/10729417_1487816298154631_257353975_n.jpg?ig_cache_key=ODQxMTUzNzI3MTMzNjg1Mjg4.2' },
        { propertyid: 2, reportdate: '01/03/2016', summary: 'Land in good condition', details: 'Land in good shape even after the rain last couple of months, there is new build residential home development in the next plot.', electricity: true, water: true, tax: true, neighbours: true, agent: 'Kumar', agentUrl: 'http://scontent.cdninstagram.com/t51.2885-15/s480x480/e15/10729417_1487816298154631_257353975_n.jpg?ig_cache_key=ODQxMTUzNzI3MTMzNjg1Mjg4.2' }
    ];

    this.all = function () {
        return reports;
    }
    this.get = function (id) {
        return reports.filter(function (x) { return x.propertyid == id; })
    }
})