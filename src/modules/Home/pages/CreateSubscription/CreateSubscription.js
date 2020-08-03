import React, { useState } from 'react';

import Page from '@/components/Page';
import Card from '@/components/Card';
import CurrencyInput from '@/components/CurrencyInput';
import IconPicker from '@/components/IconPicker';
import Field from '@/components/Field';

import { SafeAreaFull, CenteredRow } from './CreateSubscription.styled';

const defaultValues = {
  name: '',
  description: '',
  color: '#fafafa',
  icon: 'square-outline',
  cost: 0,
  startDate: new Date(),
  endDate: new Date(),
  repeats: 0, // Días
  currency: 'MXN',
};

const CreateSubscription = () => {
  const [data, setData] = useState({ ...defaultValues });

  return (
    <Page>
      <SafeAreaFull>
        <Card color="#fafafa">
          <CenteredRow>
            <IconPicker icon={data.icon} onPress={() => alert('Icon Picker')} />
          </CenteredRow>

          <CenteredRow>
            <CurrencyInput value={data.cost} onChange={(cost) => setData({ ...data, cost })} />
          </CenteredRow>

          <Field.Spacer />
          <Field.Separator />

          <Field label="Nombre">
            <Field.Input
              placeholder="Ingresar nombre"
              value={data.name}
              onChange={(name) => setData({ ...data, name })}
            />
          </Field>

          <Field.Separator />

          <Field label="Descripción">
            <Field.Input
              placeholder="Ingresar descripción"
              value={data.description}
              onChange={(description) => setData({ ...data, description })}
            />
          </Field>

          <Field.Separator />

          <Field label="Color">
            <Field.Trigger icon="chevron-right-outline" onTrigger={() => null} />
          </Field>

          <Field.Separator />
          <Field.Spacer />

          <Field>
            <Field.Button label="Crear" onPress={() => null} />
          </Field>
        </Card>
      </SafeAreaFull>
    </Page>
  );
};

export default CreateSubscription;
