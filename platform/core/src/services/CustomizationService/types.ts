import { Command } from '../../types/Command';
import { ComponentType } from 'react';

export type Obj = Record<string, unknown>;

export interface BaseCustomization extends Obj {
  id?: string;
  inheritsFrom?: string;
  description?: string;
  label?: string;
  commands?: Command[];
}

export interface LabelCustomization extends BaseCustomization {
  label: string;
}

export interface CodeCustomization extends BaseCustomization {
  code: string;
}

export interface CommandCustomization extends BaseCustomization {
  commands: Command[];
}

export interface ComponentCustomization extends BaseCustomization {
  content: (...props: any) => React.JSX.Element;
}

export type Customization =
  | React.ComponentType
  | BaseCustomization
  | LabelCustomization
  | CommandCustomization
  | CodeCustomization
  | ComponentCustomization;

export default Customization;

export type ComponentReturn = {
  component: ComponentType;
  props?: Obj;
};

export type NestedStrings = string[] | NestedStrings[];
