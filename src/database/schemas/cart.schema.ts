import * as mongoose from 'mongoose';

// Định nghĩa Schema cho Cart (Giỏ hàng)
export const CartSchema = new mongoose.Schema(
  {
    // Kích thước của sản phẩm trong giỏ hàng
    size: {
      type: String, // Kiểu dữ liệu là String
      required: true, // Trường này là bắt buộc phải có khi thêm sản phẩm vào giỏ
    },

    // Tên sản phẩm trong giỏ hàng
    name: {
      type: String, // Kiểu dữ liệu là String
      required: true, // Trường này là bắt buộc phải có khi thêm sản phẩm vào giỏ
    },

    // Giá của sản phẩm
    productPrice: {
      type: Number, // Kiểu dữ liệu là Number
      required: true, // Trường này là bắt buộc phải có khi thêm sản phẩm vào giỏ
    },

    // Tổng giá của sản phẩm (số tiền sau khi nhân với số lượng)
    totalPrice: {
      type: Number, // Kiểu dữ liệu là Number
      required: true, // Trường này là bắt buộc phải có
    },

    // Màu sắc của sản phẩm
    color: {
      type: String, // Kiểu dữ liệu là String
      required: true, // Trường này là bắt buộc phải có khi thêm sản phẩm vào giỏ
    },

    // Số lượng sản phẩm trong giỏ hàng
    quantity: {
      type: Number, // Kiểu dữ liệu là Number
      required: true, // Trường này là bắt buộc phải có khi thêm sản phẩm vào giỏ
    },

    // ID của người dùng sở hữu giỏ hàng (tham chiếu tới đối tượng User)
    userId: {
      type: mongoose.Schema.Types.ObjectId, // Kiểu dữ liệu là ObjectId, tham chiếu tới schema User
      required: true, // Trường này là bắt buộc
      ref: 'User', // Liên kết với collection User, giúp Mongoose tự động truy vấn dữ liệu liên quan
      index: true, // Tạo chỉ mục cho trường này để cải thiện hiệu suất truy vấn
    },

    // ID của sản phẩm trong giỏ hàng (tham chiếu tới đối tượng Product)
    productId: {
      type: mongoose.Schema.Types.ObjectId, // Kiểu dữ liệu là ObjectId, tham chiếu tới schema Product
      required: true, // Trường này là bắt buộc
      ref: 'Product', // Liên kết với collection Product, giúp Mongoose tự động truy vấn dữ liệu liên quan
      index: true, // Tạo chỉ mục cho trường này để cải thiện hiệu suất truy vấn
    },
  },
  {
    // Tự động thêm các trường `createdAt` và `updatedAt` vào document
    timestamps: true,
  },
);
