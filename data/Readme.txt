Lệnh import cơ sở dữ liệu vào mongodb qua cmd:
mongorestore -d ThucTapCongNhan <Đường dẫn đến file vd: d:\GitHub\ThucTapCongNhan\data\ThucTapCongNhan>
(Nhớ xóa database cũ trước khi import)
Lệnh export cơ sở dữ liệu từ mongodb  qua cmd:
mongodump -d ThucTapCongNhan -o <Đường dẫn cần export>