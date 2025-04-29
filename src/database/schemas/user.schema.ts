import * as mongoose from 'mongoose';

// Định nghĩa Schema cho User
export const UserSchema = new mongoose.Schema(
  {
    // Địa chỉ email của người dùng (được yêu cầu và phải là duy nhất trong cơ sở dữ liệu)
    email: {
      type: String, // Kiểu dữ liệu là String
      required: true, // Trường này là bắt buộc phải có khi tạo người dùng mới
      unique: true, // Email phải là duy nhất trong cơ sở dữ liệu
    },

    // Tên đầu của người dùng
    firstName: {
      type: String, // Kiểu dữ liệu là String
      required: false, // Không bắt buộc phải có
    },

    // Họ của người dùng
    lastName: {
      type: String, // Kiểu dữ liệu là String
      required: false, // Không bắt buộc phải có
    },

    // Mã OTP (One Time Password) dùng cho xác thực
    otpCode: {
      type: Number, // Kiểu dữ liệu là Number
      default: null, // Mặc định là null khi chưa có mã OTP
    },

    // Thời gian tạo mã OTP
    otpCreatedAt: {
      type: Date, // Kiểu dữ liệu là Date
      default: null, // Mặc định là null khi chưa có mã OTP
    },
  },
  {
    // Tự động thêm các trường `createdAt` và `updatedAt` vào document
    timestamps: true,
  },
); // Đóng ngoặc tại đây
