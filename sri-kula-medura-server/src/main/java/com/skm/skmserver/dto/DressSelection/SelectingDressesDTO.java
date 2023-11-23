package com.skm.skmserver.dto.DressSelection;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder(builderMethodName = "internalBuilder")
public class SelectingDressesDTO {
    private List<DressSelectionDTO> dresses;
}
