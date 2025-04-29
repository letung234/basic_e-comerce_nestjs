import * as mongoose from 'mongoose';

// Định nghĩa Schema cho đánh giá sản phẩm (Review)
export const ReviewSchema = new mongoose.Schema(
  {
    // Trường userId: lưu ID của người dùng (User) đã thực hiện đánh giá, tham chiếu đến bảng User
    userId: {
      type: mongoose.Schema.Types.ObjectId, // Kiểu dữ liệu là ObjectId để tham chiếu đến bảng User
      required: true, // Trường này bắt buộc phải có
      ref: 'User', // Thiết lập quan hệ với bảng User (tham chiếu đến bảng 'User')
    },

    // Trường productId: lưu ID của sản phẩm (Product) mà người dùng đã đánh giá, tham chiếu đến bảng Product
    productId: {
      type: mongoose.Schema.Types.ObjectId, // Kiểu dữ liệu là ObjectId để tham chiếu đến bảng Product
      required: true, // Trường này bắt buộc phải có
      ref: 'Product', // Thiết lập quan hệ với bảng Product (tham chiếu đến bảng 'Product')
    },

    // Trường rate: lưu đánh giá của người dùng, kiểu dữ liệu là Number và chỉ chấp nhận các giá trị từ 1 đến 5
    rate: {
      type: Number, // Kiểu dữ liệu là Number
      enum: [1, 2, 3, 4, 5], // Giới hạn giá trị đánh giá chỉ có thể là một trong các giá trị: 1, 2, 3, 4, hoặc 5
      required: true, // Trường này bắt buộc phải có giá trị
    },

    // Trường comment: lưu nội dung đánh giá của người dùng, kiểu dữ liệu là String và bắt buộc phải có
    comment: {
      type: String, // Kiểu dữ liệu là String
      required: true, // Trường này bắt buộc phải có
    },
  },
  {
    // Đảm bảo mỗi bản ghi đều có timestamp để ghi nhận thời gian tạo và cập nhật
    timestamps: true, // Tự động thêm hai trường: 'createdAt' và 'updatedAt' vào schema
  },
);
