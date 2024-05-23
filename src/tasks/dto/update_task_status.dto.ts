import { IsEnum } from 'class-validator';
import { TaskStatus } from '../task_status.enum';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
