import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { DropdownComponent } from '../app/dropdown/dropdown.component';
import { ReactiveFormsModule } from '@angular/forms';

const meta: Meta<DropdownComponent> = {
  component: DropdownComponent,
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<DropdownComponent>;

export const Primary: Story = {
  args: {
    label: '',
    options: [
      { key: '1', value: 'Option 1' },
      { key: '2', value: 'Option 2' },
      { key: '3', value: 'Option 3' },
      { key: '4', value: 'Option 4' },
      { key: '5', value: 'Option 5' },
      { key: '6', value: 'Option 6' },
    ],
    searchable: false,
  },
};
