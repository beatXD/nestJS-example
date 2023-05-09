import { Entity, BaseEntity, Column } from 'typeorm';

@Entity('user')
export class User extends BaseEntity {
  @Column({ type: 'int', primary: true, generated: true })
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @Column({ type: 'boolean', default: false })
  is_delete: boolean;

  @Column({ type: 'varchar', length: 255, nullable: false })
  username: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  password: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  full_name: string;
}
