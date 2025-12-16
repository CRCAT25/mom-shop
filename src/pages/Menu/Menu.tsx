import { useEffect, useState } from "react";
import type { ProductCategoryDTO } from "../../types/ProductCategoryDTO";
import { ChevronRight } from "lucide-react";

interface MenuProps {
    onSelect?: (category: ProductCategoryDTO) => void;
}

const Menu = ({ onSelect }: MenuProps) => {
    const [activeId, setActiveId] = useState<number>(0);

    const productCategories: ProductCategoryDTO[] = [
        { id: 0, name: 'Tất cả món' },
        { id: 1, name: 'Đồ ăn chay' },
        { id: 2, name: 'Đồ ăn mặn' },
        { id: 3, name: 'Đồ ăn vặt' },
        { id: 4, name: 'Đồ uống' },
    ];

    const handleSelect = (category: ProductCategoryDTO) => {
        setActiveId(category.id);
        onSelect?.(category); // 🔥 output selected
    };

    // Emit default category on first mount
    useEffect(() => {
        const defaultCategory = productCategories.find(c => c.id === activeId);
        if (defaultCategory) {
            onSelect?.(defaultCategory);
        }
    }, []);

    return (
        <div className="flex flex-col max-w-[320px] min-w-[200px] w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-(--color-gray-primary)">
            <div className="p-2 pb-0!">
                {productCategories.map((category) => {
                    const isActive = activeId === category.id;

                    return (
                        <div
                            key={category.id}
                            onClick={() => handleSelect(category)}
                            className={`
                                relative cursor-pointer font-semibold text-base py-4 px-5 my-1
                                rounded-xl transition-all duration-300 ease-out
                                flex items-center justify-between group w-full
                                ${isActive
                                    ? 'button-background-gradient text-white shadow-lg -translate-y-0.5'
                                    : 'text-gray-700 hover:bg-orange-50 hover:text-orange-600 hover:translate-x-1'}
                            `}
                        >
                            <span>{category.name}</span>

                            <ChevronRight
                                className={`
                                    w-5 h-5 transition-all duration-300
                                    ${isActive
                                        ? 'opacity-100 translate-x-0'
                                        : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}
                                `}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Menu;
