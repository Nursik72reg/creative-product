import {classNames} from "@/shared/lib/classNames";
import cls from './Sidebar.module.scss'
import React, {useState} from "react";
import {ThemeSwitcher} from "@/features/ThemeSwitcher";
import {LangSwitcher} from "@/features/LangSwithcer";

interface SidebarProps {
    className?:string
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const onToggle = () => {
        setCollapsed(prev=>!prev)
    }

    return (
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>Toggle</button>
            <div className={cls.switchersBlock}>
                <ThemeSwitcher />
                <LangSwitcher/>
            </div>
        </div>
    );
};

