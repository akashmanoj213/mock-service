import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ClaimDto } from './dto/claim.dto';
import { FirestoreService } from 'src/core/providers/firestore/firestore.service';
import { AdjudicationItemDto } from './dto/adjudication-item.dto';
import { ClaimSettlementDto } from './dto/claim-settlement.dto';
import { instanceToPlain, plainToInstance } from 'class-transformer';

@Injectable()
export class PasService {
  constructor(
    private httpService: HttpService,
    private firestoreService: FirestoreService,
  ) {}

  async getClaimDetails(claimId: number) {
    const { data: claim } = await firstValueFrom(
      this.httpService.get(
        `${process.env.CLAIM_SERVICE_BASE_URL}/claims/${claimId}`,
      ),
    );

    return claim as ClaimDto;
  }

  async getAdjudicationItems(claimId: number) {
    const { data } = await firstValueFrom(
      this.httpService.get(
        `${process.env.CLAIM_SERVICE_BASE_URL}/claims-adjudication/claim/${claimId}`,
      ),
    );

    const claimAdjudicationItem = plainToInstance(AdjudicationItemDto, data);
    const result = instanceToPlain(claimAdjudicationItem);

    return result as AdjudicationItemDto[];
  }

  async getClaimSettlementDetails(claimSettlementId: number) {
    const { data: claimSettlementDto } = await firstValueFrom(
      this.httpService.get(
        `${process.env.CLAIM_SERVICE_BASE_URL}/claims-settlement/${claimSettlementId}`,
      ),
    );

    return claimSettlementDto as ClaimSettlementDto;
  }

  async syncClaimDetails(claim: ClaimDto) {
    const savedClaim = await this.firestoreService.createOrOverride<ClaimDto>(
      process.env.CLAIMS_COLLECTION,
      claim.id,
      claim,
    );

    console.log('Claim data synced.');
    return savedClaim;
  }

  async syncClaimAdjudicationItemDetails(
    claimId,
    adjudicationItems: AdjudicationItemDto[],
  ) {
    const savedClaim = await this.firestoreService.createOrOverride<ClaimDto>(
      process.env.CLAIMS_COLLECTION,
      claimId,
      { adjudicationItems },
    );

    console.log('Claim adjudication items synced.');
    return savedClaim;
  }

  async syncClaimSettlementDetails(claimSettlementDetails: ClaimSettlementDto) {
    const savedClaimSettlementItem =
      await this.firestoreService.createOrOverride(
        process.env.CLAIMS_COLLECTION,
        claimSettlementDetails.claimId,
        {
          claimSettlement: claimSettlementDetails,
        },
      );

    console.log('Claim settlement data synced.');
    return savedClaimSettlementItem;
  }

  findAll() {
    return this.firestoreService.findAll(process.env.CLAIMS_COLLECTION);
  }

  async findOne(id: number) {
    const { exists, data } = await this.firestoreService.findById(
      process.env.CLAIMS_COLLECTION,
      id,
    );

    if (!exists) {
      throw new Error(`No Claim details found with ID: ${id}`);
    }

    return data;
  }

  remove(id: number) {
    return `This action removes a #${id} pa`;
  }
}
