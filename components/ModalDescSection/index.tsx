import {FC} from 'react';
import {Box, Typography} from '@mui/material';
import {DynamicMarkdownEditor, ModalBtnSet} from '@/components';
import {ItemType} from '@/types';
import ReactMarkdown from 'react-markdown';

interface Props {
  selectedItem?: ItemType;
  isEditingDescription: boolean;
  desc: string;
  setDesc: (desc: string) => void;
  handleDescSave: () => void;
  handleDescCancle: () => void;
  handleDescEditOpen: () => void;
}

export const ModalDescSection: FC<Props> = ({
  selectedItem,
  isEditingDescription,
  desc,
  setDesc,
  handleDescSave,
  handleDescCancle,
  handleDescEditOpen,
}) => {
  return (
    <>
      <Typography variant="h3" sx={{paddingBottom: '20px'}}>
        {selectedItem?.title}
      </Typography>
      <Box sx={{paddingBottom: '10rem'}}>
        <Typography
          variant="h5"
          sx={{fontWeight: 'bold', marginBottom: '1rem'}}
        >
          설명
        </Typography>
        {isEditingDescription ? (
          //본문 작성 중일 때
          <Box>
            <DynamicMarkdownEditor mode="desc" desc={desc} setDesc={setDesc} />
            <ModalBtnSet
              type="btn"
              onSave={handleDescSave}
              onCancle={handleDescCancle}
            />
          </Box>
        ) : (
          //본문 작성 중이 아닐 때
          <Box sx={{fontSize: '1.5rem'}} onClick={handleDescEditOpen}>
            {desc ? <ReactMarkdown>{desc}</ReactMarkdown> : '설명 편집'}
          </Box>
        )}
      </Box>
    </>
  );
};
