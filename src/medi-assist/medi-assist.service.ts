import { HttpService } from '@nestjs/axios';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { FetchAllClaimDetailsDto } from './dtos/fetch-all-claim-details.dto';
import { ClaimStatusResponseDto } from './dtos/claim-status-response.dto';
import { ClaimCreateRequestDto } from './dtos/claim-create-request.dto';
import { ClaimCreateResponseDto } from './dtos/claim-create-response.dto';
import { FetchActiveClaimsResponseDto } from './dtos/fetch-active-claims-response.dto';
import { FetchClaimsReqDto } from './dtos/fetch-claims-req.dto';
import { FetchClaimsResDto } from './dtos/fetch-claims-res.dto';
import { ClaimBillAdditionRequestDto } from './dtos/claim-bill-addition-request.dto';
import { ClaimAttachmentsAdditionDto } from './dtos/claim-attachments-addition.dto';
import { MAEnrolmentRequestDTO } from './dtos/ma-enrolment-request.dto';
import { EndorsementStatus } from './dtos/ma-enrolment-policy-details.dto';
import { Relationship } from './dtos/ma-nominee-details.dto';
import { PaymentFrequency } from './dtos/ma-recurring-premium-cycles.dto';
import { PolicyDto } from './dtos/policy.dto';

@Injectable()
export class MediAssistService {
  mediAssistBaseURL =
    'https://specmatic-api-453999121690.us-central1.run.app/claim';

  policies: PolicyDto[] = [];

  constructor(private httpService: HttpService) {}

  async getClaimStatus(
    fetchAllClaimDetailsDto: FetchAllClaimDetailsDto,
  ): Promise<ClaimStatusResponseDto> {
    console.log();
    const { data } = await firstValueFrom(
      this.httpService.post<ClaimStatusResponseDto>(
        `${this.mediAssistBaseURL}/claimStatus`,
        fetchAllClaimDetailsDto,
      ),
    );
    return data;
  }

  async getActiveClaims(
    accessToken: string,
  ): Promise<FetchActiveClaimsResponseDto> {
    const { data } = await firstValueFrom(
      this.httpService.get<FetchActiveClaimsResponseDto>(
        `${this.mediAssistBaseURL}/activeClaims`,
        { headers: { accessToken } },
      ),
    );
    return data;
  }

  async submitClaim(
    claimCreateRequestDto: ClaimCreateRequestDto,
  ): Promise<ClaimCreateResponseDto> {
    const { data } = await firstValueFrom(
      this.httpService.post<ClaimCreateResponseDto>(
        `${this.mediAssistBaseURL}/submitClaim`,
        claimCreateRequestDto,
      ),
    );
    return data;
  }

  async fetchClaimDetails(
    fetchClaimsReqDto: FetchClaimsReqDto,
  ): Promise<FetchClaimsResDto> {
    const { data } = await firstValueFrom(
      this.httpService.post<FetchClaimsResDto>(
        `${this.mediAssistBaseURL}/fetchclaimdetails`,
        fetchClaimsReqDto,
      ),
    );
    return data;
  }

  async updateClaimBills(
    claimBillAdditionRequest: ClaimBillAdditionRequestDto,
  ) {
    const { data } = await firstValueFrom(
      this.httpService.post(
        `${this.mediAssistBaseURL}/addBills`,
        claimBillAdditionRequest,
      ),
    );
    return data;
  }

  async updateAttachments(
    claimAttachmentsAdditionDTO: ClaimAttachmentsAdditionDto,
  ) {
    const { data } = await firstValueFrom(
      this.httpService.post(
        `${this.mediAssistBaseURL}/addAttachments`,
        claimAttachmentsAdditionDTO,
      ),
    );
    return data;
  }

  async enrolment(mAEnrolmentRequestDTO: MAEnrolmentRequestDTO) {
    const { data } = await firstValueFrom(
      this.httpService.post(
        `${this.mediAssistBaseURL}/enrolment`,
        mAEnrolmentRequestDTO,
      ),
    );
    return data;
  }

  async policyEnrolment(policyDetails) {
    const body: MAEnrolmentRequestDTO = {
      _MAEnrolmentDTOPolicyFields: {
        POLNUM: policyDetails.policyId,
        POLSTARTDATE: new Date(policyDetails.policyEffectiveDate).toISOString(),
        POLENDDATE: new Date(policyDetails.policyExpiryDate).toISOString(),
        ISRENEW: false,
        INSURERNAME: 'PHI',
        CLIENTTYPE: 'Health',
        POLTERM: policyDetails.tenure,
        ISSUEDATE: new Date(policyDetails.policyEffectiveDate).toISOString(),
        SRVTYPE: policyDetails.policyType,
        TPAID: 'TPA002',
        TPANAME: 'Medi Assist Insurance TPA Pvt. Ltd',
        ENDORSSTATUS: EndorsementStatus.Enforced,
        SUMBENAMT: policyDetails.sumInsured,
        PRODID: 'PRU-HEALTH-001',
        PRODNAME: policyDetails.productOptions.productName,
        AGENTNAME: 'Direct Web',
        AGENTID: '1600099-01',
        AGENTMOBILE: '9999999999',
        AGENTEMAILID: 'NA@NA.com',
        PROPOSALTYPE: policyDetails.planType,
        MAILAD1: 'Flat B-123',
        MAILAD3: 'Khorda',
        MAILAD4: 'Near Ekambra Cinema Hall',
        MAILAD5: 'Orissa',
        MAILPOST: 751010,
        MANomineeDTODetails: [
          {
            NOMINEENAME: 'Manoj',
            RELATIONSHIP: Relationship.Father,
          },
        ],
        MARecurringPremiumCyclesDTODetails: [
          {
            PAYMENTFREQUENCY: PaymentFrequency.Single,
            NETPREMIUM: parseFloat(policyDetails.premiumAmount), // TODO: This should be calculated based on the frequency
          },
        ],
      },
      _MAEnrolmentDTOBeneficiaryFields: policyDetails.members.map((member) => ({
        POLNUM: policyDetails.policyId,
        CUSTOMERID: member.memberId,
        TITLE: 'Mr',
        DATEOFBIRTH: new Date(member.dob).toISOString(),
        AGE: member.age,
        FIRSTNAME: member.firstName,
        LASTNAME: member.lastName,
        GENDER: member.gender || 'Male',
        RELATION: member.relationship,
        CUSTOMERTYPE: member.isProposer ? 'proposer' : 'insured',
        JOINDATE: new Date(policyDetails.policyEffectiveDate).toISOString(),
        SUMINSINDIV: policyDetails.sumInsured,
        CURRENTPOLICYHMB_INSURED: 500,
        BALANCEHMBAMOUNT_INSURED: 500,
        HMBFROMREWARDPOINTS_INSURED: 0,
        TOTALHMBAMOUNT_INSURED: 1000,
        TotalCumulativeBonusPercentagefromCB_CBB_INSURED: 5,
        CUMULATIVEBONUSAMOUNTFROMCB_CBB_INSURED: 27500,
        MACoverageDTODetails: [
          {
            COVERAGEID: '123',
            COVERAGENAME: 'Copay Waiver',
            COVSTARTDATE: new Date(
              policyDetails.policyEffectiveDate,
            ).toISOString(),
            COVENDDATE: new Date(policyDetails.policyExpiryDate).toISOString(),
            COVBENEFAMT: 0,
            UTILIZATIONLIMIT: 90,
          },
        ],
      })),
    };

    this.savePolicy(body);

    const { data } = await firstValueFrom(
      this.httpService.post(`${this.mediAssistBaseURL}/enrolment`, body),
    );
    return data;
  }

  async savePolicy(policyDetails) {
    const policy: PolicyDto = {
      policyId: policyDetails._MAEnrolmentDTOPolicyFields.POLNUM,
      memberName:
        policyDetails._MAEnrolmentDTOBeneficiaryFields[0].FIRSTNAME +
        ' ' +
        policyDetails._MAEnrolmentDTOBeneficiaryFields[0].LASTNAME,
      policyStartDate: policyDetails._MAEnrolmentDTOPolicyFields.POLSTARTDATE,
      policyEndDate: policyDetails._MAEnrolmentDTOPolicyFields.POLENDDATE,
      tenure: policyDetails._MAEnrolmentDTOPolicyFields.POLTERM,
      policyType: policyDetails._MAEnrolmentDTOPolicyFields.SRVTYPE,
      productName: policyDetails._MAEnrolmentDTOPolicyFields.PRODNAME,
      sumInsured: policyDetails._MAEnrolmentDTOPolicyFields.SUMBENAMT,
    };

    this.policies.push(policy);
  }

  async getAllPolicies() {
    return this.policies;
  }

  async getIpAddress() {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get('https://api.ipify.org?format=json'),
      );
      return data.ip;
    } catch (error) {
      console.error('Error fetching IP address:', error);
      throw new InternalServerErrorException('Failed to fetch IP address');
    }
  }
}
