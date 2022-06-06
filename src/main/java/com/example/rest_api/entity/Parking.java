package com.example.rest_api.entity;

import javax.persistence.*;
@Entity
@Table(name = "parking")
public class Parking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false,unique = true,name = "parking_code")
    private String parkingCode;
    @Column(nullable = false,unique = true, name = "vechile_cat_id")
    private Integer vechile_cat_id;
    @Column(nullable = false,unique = true,name = "rate_id")
    private Integer rate_id;
    @Column(nullable = false,unique = true,name = "slot_id")
    private Integer slot_id;
    @Column(nullable = false,unique = true,name = "in_time")
    private String in_time;
    @Column(nullable = false,unique = true,name = "out_time")
    private String out_time;
    @Column(nullable = false,unique = true,name = "total_time")
    private String total_time;
    @Column(nullable = false,unique = true, name = "earned_amount")
    private String earned_amount;
    @Column(nullable = false,unique = true,name = "paid_status")
    private String paid_status;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getParkingCode() {
        return parkingCode;
    }

    public void setParkingCode(String parking_code) {
        this.parkingCode = parking_code;
    }

    public Integer getVechile_cat_id() {
        return vechile_cat_id;
    }

    public void setVechile_cat_id(Integer vechile_cat_id) {
        this.vechile_cat_id = vechile_cat_id;
    }

    public Integer getRate_id() {
        return rate_id;
    }

    public void setRate_id(Integer rate_id) {
        this.rate_id = rate_id;
    }

    public Integer getSlot_id() {
        return slot_id;
    }

    public void setSlot_id(Integer slot_id) {
        this.slot_id = slot_id;
    }

    public String getIn_time() {
        return in_time;
    }

    public void setIn_time(String in_time) {
        this.in_time = in_time;
    }

    public String getOut_time() {
        return out_time;
    }

    public void setOut_time(String out_time) {
        this.out_time = out_time;
    }

    public String getTotal_time() {
        return total_time;
    }

    public void setTotal_time(String total_time) {
        this.total_time = total_time;
    }

    public String getPaid_status() {
        return paid_status;
    }

    public void setPaid_status(String paid_status) {
        this.paid_status = paid_status;
    }

    public String getEarned_amount() {
        return earned_amount;
    }

    public void setEarned_amount(String earned_amount) {
        this.earned_amount = earned_amount;
    }

    @Override
    public String toString() {
        return "Parking{" +
                "id=" + id +
                ", parking_code='" + parkingCode + '\'' +
                ", vechile_cat_id=" + vechile_cat_id +
                ", rate_id=" + rate_id +
                ", slot_id=" + slot_id +
                ", in_time='" + in_time + '\'' +
                ", out_time='" + out_time + '\'' +
                ", total_time='" + total_time + '\'' +
                ", earned_amount='" + earned_amount + '\'' +
                ", paid_status='" + paid_status + '\'' +
                '}';
    }
}