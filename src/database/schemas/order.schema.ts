import * as mongoose from 'mongoose';

// Định nghĩa Schema cho đơn hàng (Order)
export const OrderSchema = new mongoose.Schema(
  {
    // Trường price: lưu giá trị tổng của đơn hàng, phải có và là kiểu Number
    price: {
      type: Number,
      required: true, // Yêu cầu trường này phải có giá trị
    },

    // Trường userId: lưu ID của người dùng (User) đã tạo đơn hàng, tham chiếu đến bảng User
    userId: {
      type: mongoose.Schema.Types.ObjectId, // Kiểu dữ liệu là ObjectId để tham chiếu đến User
      required: true, // Trường này bắt buộc phải có
      ref: 'User', // Thiết lập quan hệ với bảng User (tham chiếu đến bảng 'User')
      index: true, // Tạo chỉ mục để tăng tốc độ truy vấn theo trường này
    },

    // Trường productIds: lưu danh sách các sản phẩm có trong đơn hàng, mỗi sản phẩm có ObjectId tham chiếu đến bảng Product
    productIds: {
      type: [mongoose.Schema.Types.ObjectId], // Kiểu dữ liệu là một mảng các ObjectId tham chiếu đến bảng Product
      required: true, // Trường này bắt buộc phải có
      ref: 'Product', // Thiết lập quan hệ với bảng Product (tham chiếu đến bảng 'Product')
    },
  },
  {
    // Đảm bảo mỗi bản ghi đều có timestamp để ghi nhận thời gian tạo và cập nhật
    timestamps: true, // Tự động thêm hai trường: 'createdAt' và 'updatedAt' vào schema
  },
);
