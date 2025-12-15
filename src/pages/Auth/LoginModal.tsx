import { useState } from 'react';
import { Modal, Form, Input, Checkbox } from 'antd';
import { Phone, Lock, Eye, EyeOff } from 'lucide-react';
import { DataValidator } from '../../utils/DataValidator';
import type { LoginForm } from '../../types/AuthDTO';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
    //#region STATE
    const [form] = Form.useForm<LoginForm>();
    const [showPassword, setShowPassword] = useState(false);
    //#endregion

    //#region HANDLE FUNCTIONS
    const handleSubmit = (values: LoginForm) => {
        if (values.phone === '0772553518' && values.password === '250823') {
            console.log('LOGIN DATA:', values);
            // TODO: call API login

            handleClose();
        }
        else {

        }
    };

    const handleClose = () => {
        onClose();
        form.resetFields();
        setShowPassword(false);
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
                <h2 className="text-xl font-bold text-white">Đăng nhập</h2>
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
                                    <EyeOff className="w-4 h-4" />
                                ) : (
                                    <Eye className="w-4 h-4" />
                                )}
                            </button>
                        }
                    />
                </Form.Item>

                {/* Remember */}
                <div className="flex items-center justify-between mt-4 mb-6">
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Ghi nhớ đăng nhập</Checkbox>
                    </Form.Item>

                    <a
                        href="#"
                        className="text-sm text-orange-500 font-semibold hover:text-orange-600"
                    >
                        Quên mật khẩu?
                    </a>
                </div>

                {/* Submit */}
                <button className="cursor-pointer w-full px-6 py-2 button-background-gradient text-white font-semibold rounded-full hover:shadow-lg hover:scale-102 transition-all duration-300">
                    Đăng nhập
                </button>

                {/* Register */}
                <div className="mt-6 text-center text-sm text-gray-600">
                    Chưa có tài khoản?{' '}
                    <a href="#" className="text-orange-500 font-bold hover:text-orange-600">
                        Đăng ký ngay
                    </a>
                </div>
            </Form>
        </Modal>
    );
};

export default LoginModal;
