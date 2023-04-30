import { useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectCategories,
  selectNumbers,
} from 'redux/columns/columns.selectors';

export const useColumns = () => {
    const columns = useSelector(selectCategories);
    const isColumnLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const number = useSelector(selectNumbers);

    return {
        columns,
        isColumnLoading,
        error,
        number,
    };
};
