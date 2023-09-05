import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum RequestedBySources {
  CASHLESS_CLAIM = 'cashless claim',
  REIMBURSEMENT_CLAIM = 'reimbursement claim',
}

export enum PaymentStatus {
  PENDING = 'pending',
  COMPLETED = 'completed',
}

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column({
    unique: true,
  })
  uniqueTransactionId: number;
  @Column({
    type: 'enum',
    enum: RequestedBySources,
  })
  requestedBy: RequestedBySources;
  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
  })
  amount: number;
  @Column()
  accountNumber: string;
  @Column()
  ifscCode: string;
  @Column()
  accountName: string;
  @Column({
    type: 'enum',
    enum: PaymentStatus,
    default: PaymentStatus.PENDING,
  })
  status: PaymentStatus;
  @CreateDateColumn()
  createdAt?: Date;
  @UpdateDateColumn()
  updatedAt?: Date;

  constructor(init?: Partial<Payment>) {
    Object.assign(this, init);
  }
}
