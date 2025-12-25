import { OrganizationUserResponse, StagePushRequest } from 'api/types';
import { DocumentResponse, PipeNodeResponse, TaskResponse } from 'api/types';
import { TasksPageSegment } from 'services/tasks/tasksProfileService/view/TasksProfile/TasksProfile.types';

export type TaskProfileProps = {
  task: TaskResponse;
  isLoadingTask: boolean;
  isPerpetrator: boolean;
  handleAddComment: () => void;
  handleSetComment: (comment: string) => void;
  commentText: string;
  handleDeleteDocument: () => void;
  relatedPipeNode: PipeNodeResponse | null;
  isViewerExecutor: boolean;
  documents: DocumentResponse[];
  pushStage: () => void;
  handleChangePushStagePayload: (
    payload: StagePushRequest | ((prev: StagePushRequest) => StagePushRequest),
  ) => void;
  isPushStageLoading: boolean;
  handleRevertStage: () => void;
  isRevertStageLoading: boolean;
  deleteDocumentModalIsOpen: boolean;
  openDeleteDocumentModal: (id: number) => void;
  closeDeleteDocumentModal: () => void;
  pushStageRequestPayload: StagePushRequest;
  isApplication: boolean;
  currentUser: OrganizationUserResponse | null;
  setTasksPageSegment: (payload: TasksPageSegment) => void;
  handleSetCoordinates: (payload: [number, number]) => void;
  handleSetZoom: (payload: number) => void;
};
