import FormItem from 'antd/es/form/FormItem';
import styled from 'styled-components';

export const FormItemSC = styled(FormItem)<{ block?: boolean }>`
  .ant-form-item-label {
    text-align: start !important;
  }

  width: ${(props) => (props.block ? '100%' : 'auto')};
`;
