import { useState } from 'react';
import { Modal, Form, Input, message } from 'antd';
import { Phone, Lock, Eye, EyeOff } from 'lucide-react';
import { DataValidator } from '../../utils/DataValidator';
import type { RegisterForm } from '../../types/AuthDTO';

interface RegisterModalProps {
    isOpen: boolean;
    onClose: () => void;
    onOpenLoginModal: () => void;
}

const RegisterModal = ({ isOpen, onClose, onOpenLoginModal }: RegisterModalProps) => {
    //#region STATE
    const [form] = Form.useForm<RegisterForm>();
    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);
    //#endregion

    //#region HANDLE FUNCTIONS
    const handleSubmit = (values: RegisterForm) => {
        if (values.password === values.rePassword) {
            console.log('LOGIN DATA:', values);
            // TODO: call API login

            handleClose();
        }
        else {
            message.error('Mật khẩu chưa khớp. Vui lòng thử lại!');
        }
    };

    const handleClose = () => {
        onClose();
        form.resetFields();
        setShowPassword(false);
        setShowRePassword(false);
    };
    //#endregion
    return (
        <Modal
            open={isOpen}
            onCancel={handleClose}
            footer={null}
            centered
            width={420}
            className="login-modal"
            closeIcon={true}
        >

            {/* Header */}
            <div className="button-background-gradient p-5 -mx-6 -mt-[26px] mb-6 rounded-t-xl text-center relative">
                <h2 className="text-xl font-bold text-white">Đăng ký</h2>
            </div>

            {/* Form */}
            <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                requiredMark={false}
            >
                {/* Phone */}
                <Form.Item
                    label="Số điện thoại"
                    name="phone"
                    rules={[
                        { required: true, message: 'Vui lòng nhập số điện thoại' },
                        {
                            pattern: DataValidator.PHONE_REGEX,
                            message: 'Số điện thoại không hợp lệ'
                        }
                    ]}
                >
                    <Input
                        size="large"
                        placeholder="0xxx xxx xxx"
                        prefix={<Phone className="w-4 h-4 text-gray-400" />}
                        maxLength={10}
                        onChange={(e) =>
                            form.setFieldValue(
                                'phone',
                                e.target.value.replace(/\D/g, '')
                            )
                        }
                    />
                </Form.Item>

                {/* Password */}
                <Form.Item
                    label="Mật khẩu"
                    name="password"
                    rules={[
                        { required: true, message: 'Vui lòng nhập mật khẩu' },
                        { min: 6, message: 'Mật khẩu tối thiểu 6 ký tự' }
                    ]}
                >
                    <Input
                        size="large"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="••••••••"
                        prefix={<Lock className="w-4 h-4 text-gray-400" />}
                        suffix={
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="text-gray-400 hover:text-gray-600"
                            >
                                {showPassword ? (
                                    <EyeOff className="w-4 h-4 cursor-pointer" />
                                ) : (
                                    <Eye className="w-4 h-4 cursor-pointer" />
                                )}
                            </button>
                        }
                    />
                </Form.Item>

                {/* Password */}
                <Form.Item
                    label="Nhập lại mật khẩu"
                    name="rePassword"
                    rules={[
                        { required: true, message: 'Vui lòng nhập mật khẩu' },
                        { min: 6, message: 'Mật khẩu tối thiểu 6 ký tự' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Mật khẩu không khớp!'));
                            }
                        })
                    ]}
                >
                    <Input
                        size="large"
                        type={showRePassword ? 'text' : 'password'}
                        placeholder="••••••••"
                        prefix={<Lock className="w-4 h-4 text-gray-400" />}
                        suffix={
                            <button
                                type="button"
                                onClick={() => setShowRePassword(!showRePassword)}
                                className="text-gray-400 hover:text-gray-600"
                            >
                                {showRePassword ? (
                                    <EyeOff className="w-4 h-4 cursor-pointer" />
                                ) : (
                                    <Eye className="w-4 h-4 cursor-pointer" />
                                )}
                            </button>
                        }
                    />
                </Form.Item>

                {/* Submit */}
                <button className="cursor-pointer w-full px-6 py-2 mt-4 button-background-gradient text-white font-semibold rounded-full hover:shadow-lg hover:scale-102 transition-all duration-300">
                    Đăng ký ngay
                </button>

                {/* Register */}
                <div className="mt-6 text-center text-sm text-gray-600">
                    Đã có tài khoản?{' '}
                    <a onClick={onOpenLoginModal} className="text-orange-500 font-bold hover:text-orange-600">
                        Đăng nhập
                    </a>
                </div>
            </Form>
        </Modal>
    );
};

export default RegisterModal;
