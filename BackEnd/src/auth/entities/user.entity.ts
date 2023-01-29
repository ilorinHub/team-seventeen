import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as argon2 from 'argon2';

export enum UserRole {
  patient = 'patient',
  doctor = 'doctor',
  healthCareProvider = 'health-care-provider',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 250 })
  fullName: string;

  @Column({ type: 'varchar', length: 250 })
  email: string;

  @Column({ type: 'char', length: 11 })
  phoneNumber: string;

  @Column({ type: 'char', length: 11, nullable: true })
  stateId: string;

  @Column({ type: 'varchar', length: 500 })
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await argon2.hash(this.password, { saltLength: 10 });
  }

  @CreateDateColumn({ type: 'timestamptz', default: 'CURRENT_TIMESTAMP(6)' })
  createdOn: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedOn: Date;

  @DeleteDateColumn({ type: 'timestamptz' })
  deletedOn: Date;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.patient })
  role: UserRole;

  @Column({ type: 'varchar', length: 500, nullable: true })
  facilityName: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  facilityAddress: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  state: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  lga: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  medicalLicenseNumber: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  mdcnNumber: string;

  @Column({ type: 'char', length: 6, nullable: true })
  verificationCode: string;

  @Column({ type: 'timestamptz' })
  verificationCodeExpiresIn: Date;

  @Column({ type: 'boolean', default: false })
  emailVerified: boolean;
}
